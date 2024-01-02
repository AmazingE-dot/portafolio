/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'cblanco': '#EFEFEF',
			'cgris': '#696E79', 
			'cprincipal': '#AA0943',
			'csecundario': '#132D46',
			'cazuloscuro': '#191E29',
			'choverprincipal': '#8F0034',
		},
		extend: {},
	},
	plugins: [],
}