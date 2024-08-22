import path from "node:path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	srcDir: "./src",
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@pinia/nuxt",
		"@nuxt/image",
		"@vueuse/nuxt",
		"@nuxt/icon",
		"@nuxtjs/storybook",
		"shadcn-nuxt",
		"@nuxt/test-utils/module",
		"@nuxtjs/robots",
	],
	vite: {
		base: "/",
		server: {
			strictPort: true,
			origin: "http://localhost:3000",
		},
		preview: {
			port: 3000,
			host: true,
		},
		optimizeDeps: {
			include: [
				"@storybook/blocks",
				"@storybook/theming",
				"@storybook/addon-links/preview",
				"@storybook/addon-essentials/docs/preview",
				"@storybook/addon-essentials/actions/preview",
				"@storybook/addon-essentials/backgrounds/preview",
				"@storybook/addon-essentials/viewport/preview",
				"@storybook/addon-essentials/measure/preview",
				"@storybook/addon-essentials/outline/preview",
				"@storybook/addon-essentials/highlight/preview",
				"@storybook/addon-interactions/preview",
				"@storybook/addon-actions/decorator",
			],
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
	},
	storybook: {
		host: "http://localhost",
		port: 6006,
		route: "/_storybook",
	},
	pinia: {
		storesDirs: ["stores"],
	},
	shadcn: {
		prefix: "",
		componentDir: "./src/components/ui",
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	vueuse: {
		ssrHandlers: true,
		autoImports: true,
	},
});
