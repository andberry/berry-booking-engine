import { createFileRoute } from "@tanstack/react-router";

interface ISearchParams {
	verbose: boolean;
}

export const Route = createFileRoute("/rooms/$roomId")({
	component: RoomDetail,
	validateSearch: (search: Record<string, unknown>): ISearchParams => {
		return {
			verbose: !!search.verbose,
		};
	},
});

function RoomDetail() {
	const { roomId } = Route.useParams();
	const { verbose } = Route.useSearch();
	return (
		<main>
			<section className="py-12">
				<h1 className="font-mw mb-3 text-4xl font-bold">
					This is Room {roomId} detail page
				</h1>
				<p>verbose: {verbose ? "Yes" : "No"}</p>
			</section>
		</main>
	);
}
