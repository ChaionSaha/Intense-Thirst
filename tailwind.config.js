import keepPreset from 'keep-react/src/keep-preset.js';
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'node_modules/keep-react/**/*.{js,jsx,ts,tsx}',
	],

	theme: {
		extend: {
			colors: {},
		},
	},

	presets: [keepPreset],
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				myThemes: {},
			},
			'light',
		],
	},
};
