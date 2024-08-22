import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.ts"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@chromatic-com/storybook",
	],
	framework: {
		name: "@storybook-vue/nuxt",
		options: {
			docgen: "vue-component-meta",
		},
	},
	docs: {
		autodocs: "tags",
	},
	staticDirs: ["../public"],
};
export default config;
