import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
	globalCss: {
		body: {
			fontFamily: "Ubuntu, sans-serif",
			fontSize: "16px",
			fontWeight: "300",
		},
	},
	theme: {
		textStyles: {
			h1: {
				value: {
					fontFamily: "Merriweather, serif",
					fontWeight: "700",
					fontSize: "70px",
					lineHeight: "1.1",
				},
			},
			h2: {
				value: {
					fontFamily: "Merriweather, serif",
					fontWeight: "700",
					fontSize: "56px",
					lineHeight: "1.15",
				},
			},
			h3: {
				value: {
					fontFamily: "Merriweather, serif",
					fontWeight: "700",
					fontSize: "42px",
					lineHeight: "1.2",
				},
			},
			h4: {
				value: {
					fontFamily: "Merriweather, serif",
					fontWeight: "700",
					fontSize: "32px",
					lineHeight: "1.25",
				},
			},
			h5: {
				value: {
					fontFamily: "Merriweather, serif",
					fontWeight: "700",
					fontSize: "24px",
					lineHeight: "1.3",
				},
			},
			h6: {
				value: {
					fontFamily: "Merriweather, serif",
					fontWeight: "700",
					fontSize: "18px",
					lineHeight: "1.35",
				},
			},
			"body.xl": {
				value: {
					fontFamily: "Ubuntu, sans-serif",
					fontSize: "24px",
					fontWeight: "300",
				},
			},
			"body.md": {
				value: {
					fontFamily: "Ubuntu, sans-serif",
					fontSize: "16px",
					fontWeight: "300",
				},
			},
			"body.sm": {
				value: {
					fontFamily: "Ubuntu, sans-serif",
					fontSize: "14px",
					fontWeight: "300",
				},
			},
		},
	},
});

export const system = createSystem(defaultConfig, config);
