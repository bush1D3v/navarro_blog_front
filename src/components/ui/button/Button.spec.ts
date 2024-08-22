import { test, expect, describe } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import Button from "./Button.vue";

const buttonTestId: string = "ButtonSCN";

describe("Shadcn-vue Button Component Tests", () => {
	test("Should be able to render the component correctly", async () => {
		await renderSuspended(Button);
		expect(screen.getByTestId(buttonTestId)).toBeDefined();
	});

	test("Should be able to render the component correctly with custom props", async () => {
		await renderSuspended(Button, {
			props: {
				default: "Button",
			},
		});
		expect(screen.getByText("Button")).toBeDefined();
	});
});
