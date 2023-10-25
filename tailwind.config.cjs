/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				negro: "#000000",
				grisf:"#343A40",
				grisb: "#6F7271",
				crema: "#E7E7E7",
				blanco: "#FFFFFF",
				naranja: "#FF5000",
				naranjam: "#F0803F",
				naranjab: "#F17D25",
				azul: "#1B396A"
			}

		},
	},
	plugins: [],
}
