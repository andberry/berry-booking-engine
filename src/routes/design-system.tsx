import {
	Badge,
	Box,
	Button,
	Container,
	HStack,
	Link,
	List,
	Separator,
	SimpleGrid,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { textStyles } from "../styles/textStyles";
import { colorTokens } from "../styles/tokens/tokens.color";
import { fontsTokens } from "../styles/tokens/tokens.fonts";
import { semanticTokens } from "../styles/tokens/tokens.semantic";

export const Route = createFileRoute("/design-system")({
	component: DesignSystemPage,
});

/* ------------------------------------------------------------------ */
/* Token readers — everything below is derived from the theme sources, */
/* so this page cannot drift from src/styles.                          */
/* ------------------------------------------------------------------ */

type TokenLeaf = { value: unknown };

// "kachi" + "600" -> "kachi.600"; "sumi" + "DEFAULT" -> "sumi"
const joinToken = (group: string, key: string) =>
	key === "DEFAULT" ? group : `${group}.${key}`;

const isLeaf = (node: unknown): node is TokenLeaf =>
	typeof node === "object" && node !== null && "value" in node;

// "{colors.kachi.600}" -> "kachi.600"
const deref = (raw: unknown) =>
	typeof raw === "string"
		? raw.replace(/^\{colors\./, "{").replace(/[{}]/g, "")
		: String(raw);

const colorGroups = Object.entries(colorTokens).map(([name, group]) => ({
	name,
	swatches: isLeaf(group)
		? [{ token: name, value: String(group.value) }]
		: Object.entries(group as Record<string, TokenLeaf>).map(
				([shade, token]) => ({
					token: joinToken(name, shade),
					value: String(token.value),
				}),
			),
}));

/** The four colours the engine is actually built out of. */
const coreColors = [
	{
		token: "kachi.600",
		jp: "勝色",
		romaji: "Kachi",
		usage: "Buttons, links, focus, selected dates.",
	},
	{
		token: "kachi.800",
		jp: "濃紺",
		romaji: "Kachi deep",
		usage: "Hover, pressed, header fills.",
	},
	{
		token: "beni.600",
		jp: "紅",
		romaji: "Beni",
		usage: "Scarcity and the hanko mark. Nothing else.",
	},
	{
		token: "nezumi.100",
		jp: "生成り",
		romaji: "Kinari",
		usage: "Page ground. Cool washi, never cream.",
	},
].map((core) => {
	const [ramp, shade] = core.token.split(".");
	return {
		...core,
		value: (
			colorTokens as unknown as Record<string, Record<string, TokenLeaf>>
		)[ramp][shade].value as string,
	};
});

/** The seven-key contract every colorPalette implements. */
const PALETTE_KEYS = [
	"solid",
	"contrast",
	"fg",
	"muted",
	"subtle",
	"emphasized",
	"focusRing",
] as const;

const paletteNames = Object.keys(semanticTokens.colors).filter((name) =>
	PALETTE_KEYS.every(
		(key) => key in (semanticTokens.colors as Record<string, object>)[name],
	),
);

/** bg / fg / border / availability — the groups that are not palettes. */
const semanticGroups = Object.entries(semanticTokens.colors)
	.filter(([name]) => !paletteNames.includes(name))
	.map(([name, group]) => ({
		name,
		swatches: Object.entries(group as Record<string, TokenLeaf>).map(
			([key, token]) => {
				const modes = token.value as { base: string; _dark: string };
				return {
					token: joinToken(name, key),
					base: deref(modes.base),
					dark: deref(modes._dark),
				};
			},
		),
	}));

const fontSizeScale = [
	["2xs", "11px — labels"],
	["xs", "13px — interactive floor"],
	["sm", "14px"],
	["md", "15px — body"],
	["lg", "18px"],
	["xl", "20px"],
	["2xl", "24px — mincho floor"],
	["3xl", "30px"],
	["4xl", "36px"],
	["5xl", "48px"],
] as const;

const radiiScale = [
	"none",
	"2xs",
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"2xl",
	"full",
] as const;

const shadowScale = ["xs", "sm", "md", "lg"] as const;

const breakpoints = [
	["sm", "480px"],
	["md", "768px"],
	["lg", "1024px"],
	["xl", "1280px"],
	["2xl", "1440px"],
	["3xl", "1536px"],
	["4xl", "1920px"],
	["5xl", "2560px"],
] as const;

const SECTIONS = [
	"Colors",
	"Semantic",
	"Palettes",
	"Typography",
	"Radii",
	"Shadows",
	"Breakpoints",
	"Components",
] as const;

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

function Label(props: React.ComponentProps<typeof Text>) {
	return <Text textStyle="label" color="fg.subtle" {...props} />;
}

function Section({
	title,
	description,
	children,
}: {
	title: string;
	description?: string;
	children: React.ReactNode;
}) {
	return (
		<Box as="section" id={title.toLowerCase()} py={10} scrollMarginTop={4}>
			<Label mb={3}>{title}</Label>
			{description && (
				<Text textStyle="body" color="fg.muted" maxW="60ch" mb={5}>
					{description}
				</Text>
			)}
			<Separator mb={8} />
			{children}
		</Box>
	);
}

function Mono(props: React.ComponentProps<typeof Text>) {
	return <Text textStyle="data" fontSize="xs" color="fg.muted" {...props} />;
}

/* ------------------------------------------------------------------ */

function DesignSystemPage() {
	return (
		<Container maxW="breakpoint-xl" py={16}>
			<Text textStyle="display" mb={3}>
				Design System
			</Text>
			<Text textStyle="body" color="fg.muted" maxW="60ch">
				Every value on this page is read straight out of{" "}
				<Box as="span" fontFamily="mono">
					src/styles
				</Box>
				. Use the semantic tokens in product code — the raw ramps below exist
				only so the semantics have somewhere to point.
			</Text>

			<Box as="nav" mt={10}>
				<Label mb={3}>Contents</Label>
				<HStack wrap="wrap" gap={4}>
					{SECTIONS.map((section) => (
						<Link key={section} href={`#${section.toLowerCase()}`}>
							{section}
						</Link>
					))}
				</HStack>
			</Box>

			<Separator mt={10} />

			{/* ---------------------------------------------------------- */}
			<Section
				title="Colors"
				description="The raw ramps. Reach for these only when defining a semantic token."
			>
				<Label mb={4} color="fg">
					Core
				</Label>
				<SimpleGrid
					columns={{ base: 1, sm: 2, lg: 4 }}
					borderWidth="1px"
					borderColor="border.subtle"
					borderRadius="md"
					overflow="hidden"
					mb={12}
				>
					{coreColors.map(({ token, jp, romaji, usage, value }) => (
						<Box
							key={token}
							bg="bg.panel"
							borderLeftWidth="1px"
							borderColor="border.subtle"
							_first={{ borderLeftWidth: 0 }}
						>
							<Box bg={token} h={32} />
							<Box p={5} borderTopWidth="1px" borderColor="border.subtle">
								<Text textStyle="body" fontWeight="700" mb={1}>
									{jp} {romaji}
								</Text>
								<Mono mb={3}>{value}</Mono>
								<Text textStyle="body" fontSize="sm" color="fg.muted">
									{usage}
								</Text>
							</Box>
						</Box>
					))}
				</SimpleGrid>

				<Label mb={4} color="fg">
					Ramps
				</Label>
				<VStack gap={10} alignItems="stretch">
					{colorGroups.map(({ name, swatches }) => (
						<Box key={name}>
							<Label mb={3} color="fg">
								{name}
							</Label>
							<SimpleGrid minChildWidth="128px" gap={4}>
								{swatches.map(({ token, value }) => (
									<Box key={token}>
										<Box
											bg={token}
											h={16}
											borderRadius="md"
											borderWidth="1px"
											borderColor="border.subtle"
											mb={2}
										/>
										<Mono color="fg">{token}</Mono>
										<Mono textTransform="uppercase">{value}</Mono>
									</Box>
								))}
							</SimpleGrid>
						</Box>
					))}
				</VStack>
			</Section>

			{/* ---------------------------------------------------------- */}
			<Section
				title="Semantic"
				description="Mode-aware aliases. These are what components should reference; each resolves differently in light and dark."
			>
				<VStack gap={10} alignItems="stretch">
					{semanticGroups.map(({ name, swatches }) => (
						<Box key={name}>
							<Label mb={3} color="fg">
								{name}
							</Label>
							<SimpleGrid minChildWidth="200px" gap={4}>
								{swatches.map(({ token, base, dark }) => (
									<Box
										key={token}
										borderWidth="1px"
										borderColor="border.subtle"
										borderRadius="md"
										overflow="hidden"
									>
										<Box bg={token} h={14} />
										<Box p={3} bg="bg.panel">
											<Mono color="fg">{token}</Mono>
											<Mono>light · {base}</Mono>
											<Mono>dark · {dark}</Mono>
										</Box>
									</Box>
								))}
							</SimpleGrid>
						</Box>
					))}
				</VStack>
			</Section>

			{/* ---------------------------------------------------------- */}
			<Section
				title="Palettes"
				description="The seven-key contract that makes colorPalette work on any Chakra component. focusRing is mizu in all five — one focus colour engine-wide, never the component's own hue."
			>
				<VStack gap={8} alignItems="stretch">
					{paletteNames.map((palette) => (
						<Box key={palette} colorPalette={palette}>
							<HStack mb={3} gap={3}>
								<Label color="fg">{palette}</Label>
								{palette === "kachi" && (
									<Badge size="sm" variant="surface">
										app default
									</Badge>
								)}
							</HStack>
							<SimpleGrid minChildWidth="104px" gap={3} mb={4}>
								{PALETTE_KEYS.map((key) => (
									<Box key={key}>
										<Box
											bg={`colorPalette.${key}`}
											h={12}
											borderRadius="sm"
											borderWidth="1px"
											borderColor="border.subtle"
											mb={2}
										/>
										<Mono>{key}</Mono>
									</Box>
								))}
							</SimpleGrid>
							<HStack wrap="wrap" gap={3}>
								<Button size="sm">Solid</Button>
								<Button size="sm" variant="subtle">
									Subtle
								</Button>
								<Button size="sm" variant="outline">
									Outline
								</Button>
								<Button size="sm" variant="ghost">
									Ghost
								</Button>
								<Badge variant="solid">Badge</Badge>
								<Badge variant="subtle">Badge</Badge>
							</HStack>
						</Box>
					))}
				</VStack>
			</Section>

			{/* ---------------------------------------------------------- */}
			<Section
				title="Typography"
				description="Mincho for headings, Kaku Gothic for body, JetBrains Mono for anything a guest reads as data — dates, prices, confirmation codes."
			>
				<Label mb={4} color="fg">
					Families
				</Label>
				<VStack gap={5} alignItems="stretch" mb={12}>
					{Object.keys(fontsTokens).map((family) => (
						<Box key={family}>
							<Mono mb={1}>{family}</Mono>
							<Text fontFamily={family} fontSize="2xl">
								予約 — Booking 0123456789
							</Text>
						</Box>
					))}
				</VStack>

				<Label mb={4} color="fg">
					Text styles
				</Label>
				<VStack gap={8} alignItems="stretch" mb={12}>
					{Object.keys(textStyles).map((style) => (
						<Box key={style}>
							<Mono mb={2}>textStyle="{style}"</Mono>
							<Text textStyle={style}>
								{style === "price"
									? "¥48,000"
									: style === "data"
										? "2026-04-12 → 2026-04-15 · 3 nights"
										: style === "label"
											? "Check-in"
											: "静けさの中に — the quiet room by the garden"}
							</Text>
						</Box>
					))}
				</VStack>

				<Label mb={4} color="fg">
					Size scale
				</Label>
				<VStack gap={4} alignItems="stretch" mb={12}>
					{fontSizeScale.map(([size, note]) => (
						<HStack key={size} gap={6} alignItems="baseline">
							<Mono minW="24" flexShrink={0}>
								{size}
							</Mono>
							<Text fontSize={size} lineHeight="1.2">
								Aa 予約
							</Text>
							<Mono>{note}</Mono>
						</HStack>
					))}
				</VStack>

				<Label mb={4} color="fg">
					Letter spacing
				</Label>
				<VStack gap={4} alignItems="stretch" mb={12}>
					<Box>
						<Mono mb={1}>label · 0.18em</Mono>
						<Text
							fontFamily="mono"
							fontSize="2xs"
							textTransform="uppercase"
							letterSpacing="label"
						>
							Availability
						</Text>
					</Box>
					<Box>
						<Mono mb={1}>tight · -0.01em</Mono>
						<Text fontFamily="heading" fontSize="3xl" letterSpacing="tight">
							Tightened display
						</Text>
					</Box>
				</VStack>

				<Label mb={4} color="fg">
					In context
				</Label>
				<Box maxW="68ch">
					<Text textStyle="display" mb={4}>
						A room that keeps its own time
					</Text>
					<Text textStyle="body" mb={6}>
						Lorem ipsum dolor sit amet,{" "}
						<Box as="span" fontWeight="700">
							consectetur adipiscing elit
						</Box>
						, sed do eiusmod tempor{" "}
						<Box as="span" fontStyle="italic">
							incididunt ut labore
						</Box>{" "}
						et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo.
					</Text>
					<Text textStyle="heading" mb={4}>
						What is included
					</Text>
					<Text textStyle="body">
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum. Sed ut perspiciatis
						unde omnis iste natus error sit voluptatem accusantium doloremque.
					</Text>
				</Box>
			</Section>

			{/* ---------------------------------------------------------- */}
			<Section
				title="Radii"
				description="Near-square by intent — lg through 4xl all resolve to 4px, so a component that asks for a large radius still reads as architectural. full is reserved for the hanko mark, avatars and status dots."
			>
				<SimpleGrid minChildWidth="112px" gap={5}>
					{radiiScale.map((radius) => (
						<Box key={radius}>
							<Box
								h={16}
								bg="bg.subtle"
								borderWidth="1px"
								borderColor="border.emphasized"
								borderRadius={radius}
								mb={2}
							/>
							<Mono color="fg">{radius}</Mono>
						</Box>
					))}
				</SimpleGrid>
			</Section>

			{/* ---------------------------------------------------------- */}
			<Section
				title="Shadows"
				description="Tinted with the kachi ink rather than pure black, so elevation stays in the same family as the rest of the palette."
			>
				<SimpleGrid minChildWidth="160px" gap={6}>
					{shadowScale.map((shadow) => (
						<Box key={shadow}>
							<Box
								h={20}
								bg="bg.panel"
								borderRadius="md"
								boxShadow={shadow}
								mb={3}
							/>
							<Mono color="fg">{shadow}</Mono>
						</Box>
					))}
				</SimpleGrid>
			</Section>

			{/* ---------------------------------------------------------- */}
			<Section title="Breakpoints">
				<Stack
					gap={0}
					borderWidth="1px"
					borderColor="border.subtle"
					borderRadius="md"
				>
					{breakpoints.map(([name, width], i) => (
						<HStack
							key={name}
							justify="space-between"
							px={4}
							py={3}
							borderTopWidth={i === 0 ? 0 : "1px"}
							borderColor="border.subtle"
						>
							<Mono color="fg">{name}</Mono>
							<Mono>{width}</Mono>
						</HStack>
					))}
				</Stack>
			</Section>

			{/* ---------------------------------------------------------- */}
			<Section title="Components">
				<Label mb={4} color="fg">
					Availability states
				</Label>
				<HStack wrap="wrap" gap={6} mb={12}>
					{(
						[
							["open", "Available"],
							["limited", "2 rooms left"],
							["last", "Last room"],
							["closed", "Sold out"],
						] as const
					).map(([state, copy]) => (
						<HStack key={state} gap={2}>
							<Box
								w={2}
								h={2}
								borderRadius="full"
								bg={`availability.${state}`}
							/>
							<Text textStyle="body" color={`availability.${state}`}>
								{copy}
							</Text>
							<Mono>availability.{state}</Mono>
						</HStack>
					))}
				</HStack>

				<Label mb={4} color="fg">
					Buttons
				</Label>
				<HStack wrap="wrap" gap={3} mb={12}>
					<Button>Reserve</Button>
					<Button variant="outline">Hold dates</Button>
					<Button variant="ghost">Back</Button>
					<Button colorPalette="beni">Cancel booking</Button>
					<Button disabled>Unavailable</Button>
				</HStack>

				<Label mb={4} color="fg">
					Lists
				</Label>
				<HStack gap={16} alignItems="start" mb={12}>
					<Box>
						<Mono mb={2}>unordered</Mono>
						<List.Root>
							<List.Item>Private onsen</List.Item>
							<List.Item>Breakfast included</List.Item>
							<List.Item>Garden view</List.Item>
						</List.Root>
					</Box>
					<Box>
						<Mono mb={2}>ordered</Mono>
						<List.Root as="ol">
							<List.Item>Choose your dates</List.Item>
							<List.Item>Select a room</List.Item>
							<List.Item>Confirm and pay</List.Item>
						</List.Root>
					</Box>
				</HStack>

				<Label mb={4} color="fg">
					Links
				</Label>
				<VStack gap={3} alignItems="start">
					<Link href="#">Default link</Link>
					<Link href="#" fontWeight="700">
						Bold link
					</Link>
					<Link href="#" colorPalette="mizu" color="colorPalette.fg">
						Informational link
					</Link>
					<Link href="#" textDecoration="none">
						No underline
					</Link>
					<RouterLink to="/rooms">
						<Link as="span">Router link (internal navigation)</Link>
					</RouterLink>
				</VStack>
			</Section>
		</Container>
	);
}
