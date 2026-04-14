import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import RoomCard from "#/components/RoomCard";
import { getRooms } from "#/data/api/rooms";

interface ISearchParams {
	verbose: boolean;
}

const RoomsIndex = () => {
	const { verbose } = Route.useSearch();
	const rooms = Route.useLoaderData();
	return (
		<main>
			<Container maxW={"7xl"} borderColor={"black"} borderWidth={1}>
				<Box as={"section"} my={12}>
					<Heading size={"4xl"} mb={4}>
						Our Rooms
					</Heading>

					<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
						{rooms.map((room) => (
							<RoomCard key={room.id} room={room} />
						))}
					</SimpleGrid>
				</Box>
				<Box as={"section"} my={12}>
					<Text>verbose: {verbose ? "Yes" : "No"}</Text>
					<Text>
						<Link from={Route.fullPath} search={{ verbose: false }}>
							Set Verbose to false
						</Link>
					</Text>
				</Box>
			</Container>
		</main>
	);
};

export const Route = createFileRoute("/rooms/")({
	component: RoomsIndex,
	loader: getRooms,
	validateSearch: (search: Record<string, unknown>): ISearchParams => {
		return {
			verbose: !!search.verbose,
		};
	},
});
