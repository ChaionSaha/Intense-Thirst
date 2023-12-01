export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: {
				primary: '#004A77',
				secondary: '#F25422',
				'base-100': '#fff',
				'base-200': '#F6FCFF',
			},
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
	},

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
