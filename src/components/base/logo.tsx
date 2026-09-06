// components/Logotype.tsx
import { Box, chakra } from "@chakra-ui/react";

const Y = chakra("span", { base: { color: "beni.solid" } });

/** Widened word space, so the two y's sit apart rather than pairing up. */
const Gap = chakra("span", { base: { letterSpacing: "0.14em" } });

type Props = {
	/** Any CSS length. The rules stay 1px regardless. */
	size?: string;
	/** Which y's carry brand red. Alternatives — never mix. */
	accent?: "both" | "final" | "none";
	/** "text" hugs the word; "full" runs the rules to the container edge. */
	span?: "text" | "full";
};

export function Logo({ size = "24px", accent = "both", span = "text" }: Props) {
	const First = accent === "both" ? Y : chakra.span;
	const Last = accent === "none" ? chakra.span : Y;

	return (
		<Box
			as="span"
			display={span === "full" ? "flex" : "inline-block"}
			justifyContent={span === "full" ? "center" : undefined}
			px="0.2em"
			fontFamily="heading" /* Zen Old Mincho */
			fontWeight="700"
			fontSize={size}
			lineHeight="1"
			letterSpacing="0.03em"
			color="kachi.solid"
			whiteSpace="nowrap"
			/* Cancels the trailing sidebearing that tracking adds after the last y,
         so the word sits optically centred between the rules. */
			_after={{ content: '""', display: "inline-block", mr: "-0.03em" }}
		>
			Berr<First>y</First>
			<Gap>&nbsp;</Gap>
			Sta<Last>y</Last>
		</Box>
	);
}
