module.exports = {
	important: true,
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/containers/**/*.{js,ts,jsx,tsx}',
	],
	theme: {},
	variants: {},
	plugins: [],
}
