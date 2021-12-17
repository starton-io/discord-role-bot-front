/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const dotenvLoad = require('dotenv-load')
const withReactSvg = require('next-react-svg')
const fsJson = require('fs-extra')
const tempDir = path.resolve(process.cwd(), '.tmp')
const _ = require('lodash')
const Axios = require('axios')
const { NODE_ENV, VERCEL_GITHUB_COMMIT_SHA, VERCEL_GITLAB_COMMIT_SHA, VERCEL_BITBUCKET_COMMIT_SHA } = process.env

const COMMIT_SHA = VERCEL_GITHUB_COMMIT_SHA || VERCEL_GITLAB_COMMIT_SHA || VERCEL_BITBUCKET_COMMIT_SHA

/*
|--------------------------------------------------------------------------
| INITIALIZE ENV
|--------------------------------------------------------------------------
*/
dotenvLoad()

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

const writeLanguage = async (lang) => {
	let rawdata = fsJson.readFileSync(`./src/translate/${lang}.json`)
	let traduction = JSON.parse(rawdata)
	await fsJson.ensureDir(tempDir)
	await fsJson.writeJson(`${tempDir}/${lang}.json`, traduction)
}

writeLanguage('fr')
writeLanguage('en')

/*
|--------------------------------------------------------------------------
| NUXT CONFIG
|--------------------------------------------------------------------------
*/
const nextConfig = {
	productionBrowserSourceMaps: true,
	env: {
		// Make the COMMIT_SHA available to the client so that Sentry events can be
		// marked for the release they belong to. It may be undefined if running
		// outside of Vercel
		NEXT_PUBLIC_COMMIT_SHA: COMMIT_SHA,
	},
	webpack: (config, options) => {
		config.plugins.push(
			new options.webpack.DefinePlugin({
				'process.env.NEXT_IS_SERVER': JSON.stringify(options.isServer.toString()),
			}),
		)

		return config
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	i18n: {
		locales: ['en', 'fr'],
		defaultLocale: 'en',
	},
}

module.exports = withReactSvg({
	include: path.resolve(__dirname, 'src/assets/svg'),
	...nextConfig,
})
