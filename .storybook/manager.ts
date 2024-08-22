import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
	theme: create({
		base: "dark",
		textColor: "white",
		appPreviewBg: "#333333",
		brandTitle: "Victor Navarro Blog",
		brandUrl: "https://bush1d3v-portfolio.vercel.app/",
		brandImage: "logo.png",
		brandTarget: "_self",
	}),
});
