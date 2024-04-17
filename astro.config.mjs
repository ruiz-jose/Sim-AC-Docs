import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import LangAC from "./src/assets/ac.tmLanguage.json";

// https://astro.build/config
export default defineConfig({
	site: "https://ruiz-jose.github.io/Sim-AC-Docs/",
	base: "/Sim-AC-Docs/",
	trailingSlash: "always",
	
	integrations: [
		starlight({
			title: 'Sim-AC',
			favicon: "/favicon.svg",
			logo: {
				light: '/src/assets/logo-Sim-AC-light.svg',
				dark: '/src/assets/logo-Sim-AC-dark.svg'
			},
			//logo: { src: "./public/favicon.svg", alt: "Logo" },
			pagination: false,
			lastUpdated: true,
			social: {
				github: 'https://github.com/ruiz-jose/Sim-AC-Docs',
			},
			sidebar: [
				{ label: "Introducción", link: '/inicio/intro/', badge: 'inicio' },				
				{
					label: 'Parte 0: Lógica binaria',
					autogenerate: { directory: 'parte-0-logicabinaria' },
				},
				{
					label: 'Parte 1: Circuitos',
					autogenerate: { directory: 'parte-1-circuitos' },
				},
				{
					label: 'Parte 2: Diseño CPU',
					autogenerate: { directory: 'parte-2-disenio-cpu' },
				},
				{
					label: 'Parte 3: Ensamblador',
					autogenerate: { directory: 'parte-3-ensamblador' },
				},
				{
					label: 'Parte 4: Simulación',
					autogenerate: { directory: 'parte-4-simulacion' },
				},
				{
					label: 'Parte 5: Hardware',
					autogenerate: { directory: 'parte-5-hardware' },
				},
			]			
		}),
	],
	markdown: {
		shikiConfig: {
			langs: [LangAC],
			theme: "vitesse-dark", // best approximation of the theme
		},
	},  
});
