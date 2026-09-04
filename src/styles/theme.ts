import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { textStyles } from "./textStyles";
import { colorTokens } from "./tokens/tokens.color";
import { fontsTokens } from "./tokens/tokens.fonts";
import { semanticTokens } from "./tokens/tokens.semantic";

const themeConfig = defineConfig({
	globalCss: {
		html: { colorPalette: "kachi" }, // app-wide default palette
		body: { fontFeatureSettings: '"palt" 1' }, // proportional kana metrics
		"::selection": { bg: "kachi.solid", color: "kachi.contrast" },
	},
	theme: {
		breakpoints: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1440px",
			"3xl": "1536px",
			"4xl": "1920px",
			"5xl": "2560px",
		},
		tokens: {
			colors: colorTokens,
			fonts: fontsTokens,
			fontSizes: {
				"2xs": { value: "0.6875rem" }, // 11px — labels
				xs: { value: "0.8125rem" }, // 13px — interactive floor
				sm: { value: "0.875rem" }, // 14px
				md: { value: "0.9375rem" }, // 15px — body
				lg: { value: "1.125rem" }, // 18px
				xl: { value: "1.25rem" }, // 20px
				"2xl": { value: "1.5rem" }, // 24px — mincho floor
				"3xl": { value: "1.875rem" },
				"4xl": { value: "2.25rem" },
				"5xl": { value: "3rem" },
			},
			letterSpacings: {
				label: { value: "0.18em" },
				tight: { value: "-0.01em" },
			},
			radii: {
				none: { value: "0" },
				"2xs": { value: "1px" },
				xs: { value: "2px" },
				sm: { value: "2px" },
				md: { value: "3px" },
				lg: { value: "4px" },
				xl: { value: "4px" },
				"2xl": { value: "4px" },
				"3xl": { value: "4px" },
				"4xl": { value: "4px" },
				full: { value: "9999px" }, // hanko mark, avatars, status dots
			},
			shadows: {
				xs: { value: "0 1px 2px rgba(22, 35, 58, 0.06)" },
				sm: { value: "0 1px 3px rgba(22, 35, 58, 0.08)" },
				md: { value: "0 4px 12px rgba(22, 35, 58, 0.10)" },
				lg: { value: "0 12px 32px rgba(22, 35, 58, 0.14)" },
			},
		},
		semanticTokens: semanticTokens,
		textStyles: textStyles,

		// buttons recipes at minimum
		recipes: {},
	},
});

export const system = createSystem(defaultConfig, themeConfig);
