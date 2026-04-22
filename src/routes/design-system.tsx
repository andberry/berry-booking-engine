import {
	Box,
	Container,
	Heading,
	Link,
	List,
	Separator,
	Text,
	VStack,
} from "@chakra-ui/react";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";

export const Route = createFileRoute("/design-system")({
	component: DesignSystemPage,
});

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<Box as="section" py={8}>
			<Text
				fontSize="xs"
				fontWeight="bold"
				textTransform="uppercase"
				letterSpacing="wider"
				color="gray.500"
				mb={4}
			>
				{title}
			</Text>
			<Separator mb={6} />
			{children}
		</Box>
	);
}

function DesignSystemPage() {
	return (
		<Container py={12}>
			<Heading size="4xl" mb={2}>
				Design System
			</Heading>
			<Text color="gray.500" mb={8}>
				A reference of Chakra UI components used in this app.
			</Text>
			<Separator />

			<Section title="Typography">
				<Text fontSize="xs" fontWeight="bold" color="gray.400" mb={3}>
					Heading
				</Text>
				<Box display="flex" flexDirection="column" gap={4} mb={10}>
					<Heading textStyle="h1">Heading H1 — 70px</Heading>
					<Heading textStyle="h2">Heading H2 — 56px</Heading>
					<Heading textStyle="h3">Heading H3 — 42px</Heading>
					<Heading textStyle="h4">Heading H4 — 32px</Heading>
					<Heading textStyle="h5">Heading H5 — 24px</Heading>
					<Heading textStyle="h6">Heading H6 — 18px</Heading>
				</Box>

				<Text fontSize="xs" fontWeight="bold" color="gray.400" mb={3}>
					Text
				</Text>
				<VStack gap={12} alignItems={"start"}>
					{(
						[
							{ style: "body.xl", label: "body.xl / 24px" },
							{ style: "body.md", label: "body.md / 16px" },
							{ style: "body.sm", label: "body.sm / 14px" },
						] as const
					).map(({ style, label }) => (
						<Box key={style}>
							<Text fontSize="xs" fontWeight="bold" color="gray.400" mb={3}>
								{label}
							</Text>
							<Text textStyle={style}>
								Lorem ipsum dolor sit amet,{" "}
								<Box as="span" fontWeight="bold">
									consectetur adipiscing elit
								</Box>
								, sed do eiusmod tempor{" "}
								<Box as="span" fontStyle="italic">
									incididunt ut labore
								</Box>{" "}
								et dolore magna aliqua. Ut enim ad minim veniam,{" "}
								<Box as="span" textDecoration="underline">
									quis nostrud exercitation
								</Box>{" "}
								ullamco laboris nisi.
							</Text>
						</Box>
					))}
				</VStack>

				<Text fontSize="xs" fontWeight="bold" color="gray.400" mt={10} mb={3}>
					Paragraph
				</Text>
				<Box>
					<Heading textStyle="h1" as={"h1"} mb={4}>
						This is an H1 Heading
					</Heading>
					<Heading textStyle="h2" as={"h2"} mb={4}>
						This is an H2 Heading
					</Heading>
					<Text textStyle="body.md" mb={8}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae hic
						facere atque voluptates nobis. Ab quibusdam itaque numquam dolores
						unde eos deserunt facere fugit. Quidem neque modi esse sint cum?
						Lorem ipsum dolor sit amet,{" "}
						<Box as="span" fontWeight="bold">
							consectetur adipiscing elit
						</Box>
						, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat.
					</Text>
					<Heading textStyle="h3" mb={4}>
						This is an H3 Heading
					</Heading>
					<Text textStyle="body.md">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Exercitationem repellendus ex atque distinctio recusandae
						perspiciatis nesciunt! Quos quibusdam nam nemo debitis enim odit
						similique, expedita eius et commodi architecto molestiae! Duis aute
						irure dolor in reprehenderit in voluptate velit esse cillum dolore
						eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident,{" "}
						<Box as="span" fontStyle="italic">
							sunt in culpa qui officia deserunt mollit anim id est laborum
						</Box>
						.
					</Text>
					<Text>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
						laborum beatae, ab cupiditate quas, aspernatur corporis vel eos
						numquam harum sapiente nemo voluptas itaque! Nostrum perferendis
						necessitatibus quod quae soluta!
					</Text>
					<Text>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
						omnis eveniet alias, nesciunt repellendus laborum quidem mollitia
						labore. Suscipit, id? Adipisci facilis reprehenderit debitis
						repellendus aliquam deleniti placeat repudiandae quam.
					</Text>
				</Box>
			</Section>

			<Section title="List">
				<Box display="flex" gap={12}>
					<Box>
						<Text fontWeight="bold" mb={3}>
							Unordered
						</Text>
						<List.Root>
							<List.Item>First item</List.Item>
							<List.Item>Second item</List.Item>
							<List.Item>Third item</List.Item>
						</List.Root>
					</Box>
					<Box>
						<Text fontWeight="bold" mb={3}>
							Ordered
						</Text>
						<List.Root as="ol">
							<List.Item>First item</List.Item>
							<List.Item>Second item</List.Item>
							<List.Item>Third item</List.Item>
						</List.Root>
					</Box>
				</Box>
			</Section>

			<Section title="Link">
				<Box display="flex" flexDirection="column" gap={4}>
					<Link href="#">Default link</Link>
					<Link href="#" fontWeight="bold">
						Bold link
					</Link>
					<Link href="#" color="teal.500">
						Colored link
					</Link>
					<Link href="#" textDecoration="none">
						No underline
					</Link>
					<RouterLink to="/rooms">
						<Link as="span">Router link (internal navigation)</Link>
					</RouterLink>
				</Box>
			</Section>
		</Container>
	);
}
