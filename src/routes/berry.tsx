import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/berry")({
	component: BerryPage,
});

function BerryPage() {
	return (
		<main>
			<section className="py-12">
				<h1 className="font-mw mb-3 text-4xl font-bold">This is Berry page</h1>
				<p>
					Go to{" "}
					<Link to="/rooms" search={{ verbose: true }}>
						Rooms page
					</Link>
				</p>
				<p>
					Go to{" "}
					<Link
						to="/rooms/$roomId"
						params={{ roomId: "100" }}
						search={{ verbose: false }}
					>
						Room 100 Detail Page
					</Link>
				</p>
			</section>
		</main>
	);
}
