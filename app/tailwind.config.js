const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['/index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'space-mono': ['"Space Mono"', ...defaultTheme.fontFamily.sans],
				'dm-sans': ['"DM Sans"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
