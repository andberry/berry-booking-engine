import { Box, Container, Heading } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			<Box as="section" py={16}>
				<Container maxW={"breakpoint-xl"}>
					<Heading textStyle={"heading"} as={"h1"} fontSize={"5xl"}>
						This is homepage
					</Heading>
				</Container>
			</Box>
		</main>
	);
}
