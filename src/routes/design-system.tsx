import {
	Box,
	Container,
	Heading,
	Link,
	List,
	Separator,
	Text,
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

			<Section title="Heading">
				<Box display="flex" flexDirection="column" gap={4}>
					<Heading size="4xl">Heading 4xl</Heading>
					<Heading size="3xl">Heading 3xl</Heading>
					<Heading size="2xl">Heading 2xl</Heading>
					<Heading size="xl">Heading xl</Heading>
					<Heading size="lg">Heading lg</Heading>
					<Heading size="md">Heading md</Heading>
					<Heading size="sm">Heading sm</Heading>
					<Heading size="xs">Heading xs</Heading>
				</Box>
			</Section>

			<Section title="Text">
				<Box display="flex" flexDirection="column" gap={4}>
					<Text fontSize="xl">
						Text xl — The quick brown fox jumps over the lazy dog.
					</Text>
					<Text fontSize="lg">
						Text lg — The quick brown fox jumps over the lazy dog.
					</Text>
					<Text fontSize="md">
						Text md — The quick brown fox jumps over the lazy dog.
					</Text>
					<Text fontSize="sm">
						Text sm — The quick brown fox jumps over the lazy dog.
					</Text>
					<Text fontSize="xs">
						Text xs — The quick brown fox jumps over the lazy dog.
					</Text>
				</Box>
			</Section>

			<Section title="Text variants">
				<Box display="flex" flexDirection="column" gap={4}>
					<Text>Default</Text>
					<Text fontWeight="bold">Bold</Text>
					<Text fontStyle="italic">Italic</Text>
					<Text textDecoration="underline">Underline</Text>
					<Text color="gray.500">Muted</Text>
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
