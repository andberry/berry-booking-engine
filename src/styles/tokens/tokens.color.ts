export const colorTokens = {
	kachi: {
		50: { value: "#F1F4F9" },
		100: { value: "#DEE7F2" },
		200: { value: "#BED0E5" },
		300: { value: "#93AED6" },
		400: { value: "#6787B4" },
		500: { value: "#3F5F8E" },
		600: { value: "#23395B" }, // ← core brand
		700: { value: "#1C2E49" },
		800: { value: "#16233A" },
		900: { value: "#101929" },
		950: { value: "#0A101B" },
	},
	// 紅 beni — scarcity and destructive only.
	beni: {
		50: { value: "#FDF2F4" },
		100: { value: "#FBE0E5" },
		200: { value: "#F5C0CA" },
		300: { value: "#EC94A5" },
		400: { value: "#E4707F" },
		500: { value: "#D14A62" },
		600: { value: "#B8324A" },
		700: { value: "#96253A" },
		800: { value: "#781F2F" },
		900: { value: "#5A1723" },
		950: { value: "#3A0E17" },
	},
	// 抹茶 matcha — available, confirmed, savings.
	matcha: {
		50: { value: "#F3F6F0" },
		100: { value: "#E3EBDD" },
		200: { value: "#C6D6BC" },
		300: { value: "#A3BB94" },
		400: { value: "#8FB07A" },
		500: { value: "#6F9159" },
		600: { value: "#5A7A49" },
		700: { value: "#47603A" },
		800: { value: "#384C2E" },
		900: { value: "#2A3A23" },
		950: { value: "#1A2416" },
	},
	// 琥珀 kohaku — limited availability, warnings.
	kohaku: {
		50: { value: "#FBF6EC" },
		100: { value: "#F6EAD1" },
		200: { value: "#EBD3A2" },
		300: { value: "#DDB86D" },
		400: { value: "#D3A34F" },
		500: { value: "#BE8A31" },
		600: { value: "#A8761F" },
		700: { value: "#855C18" },
		800: { value: "#684814" },
		900: { value: "#4C340F" },
		950: { value: "#2F2009" },
	},
	// 水 mizu — informational, and the focus ring system-wide.
	mizu: {
		50: { value: "#F0F7FA" },
		100: { value: "#DAEDF3" },
		200: { value: "#B0D8E4" },
		300: { value: "#9ACBDA" },
		400: { value: "#74B2CA" },
		500: { value: "#4D93AE" },
		600: { value: "#3F7F99" },
		700: { value: "#326377" },
		800: { value: "#284F5E" },
		900: { value: "#1E3B46" },
		950: { value: "#13252C" },
	},
	// 鼠 nezumi — neutrals. Warm washi at the light end, cool sumi at the dark.
	nezumi: {
		50: { value: "#FBFAF7" }, // washi — light panel
		100: { value: "#F2F1EC" }, // 生成り kinari — light canvas
		150: { value: "#D3D7DC" },
		200: { value: "#E9E8E1" }, // light raised
		250: { value: "#B2B8BF" }, // dark fg.muted
		300: { value: "#D6D5CB" }, // light hairline
		400: { value: "#A6A79C" }, // light hairline, emphasized
		500: { value: "#787F89" }, // fg.subtle, both modes
		600: { value: "#4A5058" }, // light fg.muted / dark hairline emphasized
		700: { value: "#2A313A" }, // dark hairline
		800: { value: "#1F242C" }, // dark raised
		900: { value: "#171B21" }, // dark panel
		950: { value: "#111419" }, // dark canvas
	},
	sumi: { value: "#171A1F" }, // 墨 ink stick — light-mode text
	gofun: { value: "#ECEBE4" }, // 胡粉 shell white — dark-mode text
};
