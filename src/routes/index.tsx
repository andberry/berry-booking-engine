import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main>
			<section className="py-12">
				<h1 className="font-mw mb-3 text-4xl font-bold">This is homepage</h1>
			</section>
		</main>
	);
}
