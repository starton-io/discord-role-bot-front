// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		node: true,
		browser: true,
		commonjs: true,
	},
	parserOptions: {
		ecmaFeatures: { jsx: true },
	},
	settings: {
		react: {
			pragma: 'React', // Pragma to use, default to "React"
			version: 'detect', // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			// default to latest and warns if missing
			// It will default to "detect" in the future
		},
		propWrapperFunctions: [
			// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
			'forbidExtraProps',
			{ property: 'freeze', object: 'Object' },
			{ property: 'myFavoriteWrapper' },
		],
		linkComponents: [
			// Components used as alternatives to <a> for linking, eg. <StartonLink to={ url } />
			'Hyperlink',
			{ name: 'Link', linkAttribute: 'to' },
		],
		'import/resolver': {
			node: {
				paths: ['src'],
			},
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		// Prettier plugin and recommended rules
		// 'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	rules: {
		// Include .prettierrc.js rules
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
		'react/prop-types': 'off',
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'quote-props': ['error', 'as-needed'],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object'],
			},
		],
	},
}
