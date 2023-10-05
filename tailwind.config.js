/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				"custom-dark-1": "#403F3F",
				"custom-dark-2": "#706F6F",
				"custom-dark-3": "#F3F3F3",
				"custom-dark-4": "#E7E7E7",
				"custom-red": "#D72050",
			}
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
				},
			},
		],
	},
}

