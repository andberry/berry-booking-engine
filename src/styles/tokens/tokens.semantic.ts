const createAliasColor = (name: string) =>
	Object.fromEntries(
		[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((step) => [
			step,
			{ value: `{colors.${name}.${step}}` },
		]),
	);

export const semanticTokens = {
	colors: {
		// aliases
		primary: createAliasColor("kachi"),
		accent: createAliasColor("beni"),

		bg: {
			DEFAULT: {
				value: { base: "{colors.nezumi.100}", _dark: "{colors.nezumi.950}" },
			},
			panel: {
				value: { base: "{colors.nezumi.50}", _dark: "{colors.nezumi.900}" },
			},
			subtle: {
				value: { base: "{colors.nezumi.200}", _dark: "{colors.nezumi.800}" },
			},
			muted: {
				value: { base: "{colors.nezumi.200}", _dark: "{colors.nezumi.700}" },
			},
			emphasized: {
				value: { base: "{colors.nezumi.300}", _dark: "{colors.nezumi.600}" },
			},
			inverted: {
				value: { base: "{colors.nezumi.950}", _dark: "{colors.nezumi.100}" },
			},
		},

		fg: {
			DEFAULT: { value: { base: "{colors.sumi}", _dark: "{colors.gofun}" } },
			muted: {
				value: { base: "{colors.nezumi.600}", _dark: "{colors.nezumi.250}" },
			},
			subtle: {
				value: { base: "{colors.nezumi.500}", _dark: "{colors.nezumi.500}" },
			},
			inverted: {
				value: { base: "{colors.gofun}", _dark: "{colors.sumi}" },
			},
		},

		border: {
			DEFAULT: {
				value: { base: "{colors.nezumi.300}", _dark: "{colors.nezumi.700}" },
			},
			subtle: {
				value: { base: "{colors.nezumi.200}", _dark: "{colors.nezumi.800}" },
			},
			muted: {
				value: { base: "{colors.nezumi.200}", _dark: "{colors.nezumi.700}" },
			},
			emphasized: {
				value: { base: "{colors.nezumi.400}", _dark: "{colors.nezumi.600}" },
			},
		},

		// Booking-domain state. Read these, never the raw ramps.
		availability: {
			open: {
				value: { base: "{colors.matcha.600}", _dark: "{colors.matcha.400}" },
			},
			limited: {
				value: { base: "{colors.kohaku.600}", _dark: "{colors.kohaku.400}" },
			},
			last: {
				value: { base: "{colors.beni.600}", _dark: "{colors.beni.400}" },
			},
			closed: {
				value: { base: "{colors.nezumi.400}", _dark: "{colors.nezumi.600}" },
			},
		},

		/* colorPalette contract — these seven keys are what make
			<Button colorPalette="kachi" /> work on every Chakra component.
			focusRing is deliberately mizu in all five palettes: one focus
			colour across the whole engine, never the button's own hue. */
		kachi: {
			contrast: { value: { base: "white", _dark: "white" } },
			fg: {
				value: { base: "{colors.kachi.700}", _dark: "{colors.kachi.300}" },
			},
			subtle: {
				value: { base: "{colors.kachi.50}", _dark: "{colors.kachi.950}" },
			},
			muted: {
				value: { base: "{colors.kachi.100}", _dark: "{colors.kachi.900}" },
			},
			emphasized: {
				value: { base: "{colors.kachi.200}", _dark: "{colors.kachi.800}" },
			},
			solid: {
				value: { base: "{colors.kachi.600}", _dark: "{colors.kachi.500}" },
			},
			focusRing: {
				value: { base: "{colors.mizu.600}", _dark: "{colors.mizu.400}" },
			},
		},
		beni: {
			contrast: { value: { base: "white", _dark: "white" } },
			fg: { value: { base: "{colors.beni.700}", _dark: "{colors.beni.300}" } },
			subtle: {
				value: { base: "{colors.beni.50}", _dark: "{colors.beni.950}" },
			},
			muted: {
				value: { base: "{colors.beni.100}", _dark: "{colors.beni.900}" },
			},
			emphasized: {
				value: { base: "{colors.beni.200}", _dark: "{colors.beni.800}" },
			},
			solid: {
				value: { base: "{colors.beni.600}", _dark: "{colors.beni.500}" },
			},
			focusRing: {
				value: { base: "{colors.mizu.600}", _dark: "{colors.mizu.400}" },
			},
		},
		matcha: {
			contrast: { value: { base: "white", _dark: "white" } },
			fg: {
				value: { base: "{colors.matcha.700}", _dark: "{colors.matcha.300}" },
			},
			subtle: {
				value: { base: "{colors.matcha.50}", _dark: "{colors.matcha.950}" },
			},
			muted: {
				value: { base: "{colors.matcha.100}", _dark: "{colors.matcha.900}" },
			},
			emphasized: {
				value: { base: "{colors.matcha.200}", _dark: "{colors.matcha.800}" },
			},
			solid: {
				value: { base: "{colors.matcha.600}", _dark: "{colors.matcha.500}" },
			},
			focusRing: {
				value: { base: "{colors.mizu.600}", _dark: "{colors.mizu.400}" },
			},
		},
		kohaku: {
			contrast: { value: { base: "white", _dark: "{colors.sumi}" } },
			fg: {
				value: { base: "{colors.kohaku.700}", _dark: "{colors.kohaku.300}" },
			},
			subtle: {
				value: { base: "{colors.kohaku.50}", _dark: "{colors.kohaku.950}" },
			},
			muted: {
				value: { base: "{colors.kohaku.100}", _dark: "{colors.kohaku.900}" },
			},
			emphasized: {
				value: { base: "{colors.kohaku.200}", _dark: "{colors.kohaku.800}" },
			},
			solid: {
				value: { base: "{colors.kohaku.600}", _dark: "{colors.kohaku.400}" },
			},
			focusRing: {
				value: { base: "{colors.mizu.600}", _dark: "{colors.mizu.400}" },
			},
		},
		mizu: {
			contrast: { value: { base: "white", _dark: "white" } },
			fg: { value: { base: "{colors.mizu.700}", _dark: "{colors.mizu.300}" } },
			subtle: {
				value: { base: "{colors.mizu.50}", _dark: "{colors.mizu.950}" },
			},
			muted: {
				value: { base: "{colors.mizu.100}", _dark: "{colors.mizu.900}" },
			},
			emphasized: {
				value: { base: "{colors.mizu.200}", _dark: "{colors.mizu.800}" },
			},
			solid: {
				value: { base: "{colors.mizu.600}", _dark: "{colors.mizu.500}" },
			},
			focusRing: {
				value: { base: "{colors.mizu.600}", _dark: "{colors.mizu.400}" },
			},
		},
	},
};
