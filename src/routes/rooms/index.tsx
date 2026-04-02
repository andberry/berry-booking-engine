import { createFileRoute, Link } from "@tanstack/react-router";

interface ISearchParams {
	verbose: boolean;
}

const RoomsIndex = () => {
	const { verbose } = Route.useSearch();
	return (
		<main>
			<section className="py-12">
				<h1 className="font-mw mb-3 text-4xl font-bold">This is Rooms index</h1>
				<p>verbose: {verbose ? "Yes" : "No"}</p>
				<Link from={Route.fullPath} search={{ verbose: false }}>
					Set Verbose to false
				</Link>
			</section>
		</main>
	);
};

export const Route = createFileRoute("/rooms/")({
	component: RoomsIndex,
	// validate and parse the search params into a typed state
	validateSearch: (search: Record<string, unknown>): ISearchParams => {
		return {
			verbose: !!search.verbose,
		};
	},
});
