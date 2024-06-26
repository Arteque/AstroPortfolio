/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			/*
			light: "#E9E9E9",
			dark: "#0C254B",
			blue: "#114595",
			orange: "#DF6334",
			green: "#45CB53",
			lightgreen: "#8FF299"
			*/
			text: "rgba(var(--text))",
			texthover:"rgba(var(--texthover))",
			background: "rgba(var(--background))",
			blue: "rgba(var(blue))",
			orange: "rgba(var(--orange))",
			green: "rgba(var(--green))",
			lightgreen: "rgba(var(--lightgreen))"
		},
		fontFamily: {
			'sans': ['Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", 'Segoe UI Symbol', "Noto Color Emoji"],
		},
		extend: {},
	},
	plugins: [
		function({ addBase, theme }) {
			function extractColorVars(colorObj, colorGroup = '') {
			  return Object.keys(colorObj).reduce((vars, colorKey) => {
				const value = colorObj[colorKey];
	  
				const newVars =
				  typeof value === 'string'
					? { [`--color${colorGroup}-${colorKey}`]: value }
					: extractColorVars(value, `-${colorKey}`);
	  
				return { ...vars, ...newVars };
			  }, {});
			}
	  
			addBase({
			  ':root': extractColorVars(theme('colors')),
			});
		  },
	],
}
