export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: {
				primary: '#004A77',
				secondary: '#F25422',
				'base-100': '#fff',
				'base-200': '#F6FCFF',
				'base-300': '#666',
				'header-color': '#2D3445',
			},
			boxShadow: {
				card: '0px 13px 19px 0px rgba(0,0,0,0.07)',
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
