import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		defaultCommandTimeout: 10000,
		supportFile: false,
		fixturesFolder: false,
		baseUrl: "http://localhost:3000",
		env: {
			ENVIRONMENT: "staging",
		},
	},
	component: {
		devServer: {
			framework: "nuxt",
			bundler: "webpack",
		},
	},
});
