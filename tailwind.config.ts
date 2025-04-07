import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
	theme: {
		screens: { xs: '26rem', sm: '40rem', md: '48rem', lg: '64rem', xl: '80rem' },
		container: { center: true, padding: { DEFAULT: '1.5rem', xl: '8rem' } },
		extend: {
			transitionDuration: { DEFAULT: '300ms' },
			fontFamily: {
				sans: ['Krub', 'sans-serif'],
				llrg: ['llrg', 'sans-serif'], // este es el nombre que luego usarás como font-llrg
			},
			spacing: Object.fromEntries([...Array(70).keys()].slice(17).map(val => [val * 4, `${val}rem`])),
			transitionDelay: Object.fromEntries([...Array(20).keys()].map(val => [val * 50, `${val * 50}ms`])),
			colors: {
				green: {
					700: '#1F7E2A',
					950: '#033220',
				},
				lime: {
					200: '#D2FF86',
				},
				orange: {
					100: '#F7E5CF',
				},
			},
			keyframes: {
				// Definimos un nombre cualquiera, por ejemplo 'vertical-overlay'
				'vertical-overlay': {
					'0%': { transform: 'translateY(100%)' }, // Empieza "abajo"
					'100%': { transform: 'translateY(0%)' }, // Termina cubriendo todo
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				// Asignamos la animación a un nombre de clase
				'vertical-overlay': 'vertical-overlay 1.2s ease-in-out forwards',
				float: 'float 1s ease-in-out infinite',
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('reveal', '.reveal &')
			addVariant('revealed', '.revealed &')
		}),
	],
} satisfies Config
