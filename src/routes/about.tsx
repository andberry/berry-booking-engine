import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
	return (
		<main>
			<section className="py-12">
				<h1 className="font-mw mb-3 text-4xl font-bold">About page</h1>
			</section>
		</main>
	);
}
