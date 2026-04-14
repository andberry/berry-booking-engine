import { Container } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			<section>
				<Container>
					<h1 className="font-mw mb-3 text-4xl font-bold">This is homepage</h1>
				</Container>
			</section>
		</main>
	);
}
