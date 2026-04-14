import { Badge, Button, Card, Heading, Image, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import type { IRoom } from "#/data/room";
import { cartStore } from "#/stores/cartStore";

interface RoomCardProps {
	room: IRoom;
}

const RoomCard = observer(function RoomCard({ room }: RoomCardProps) {
	const inCart = !!cartStore.rooms.find((r) => r.id === room.id);

	return (
		<Card.Root overflow={"hidden"}>
			<Image
				src={room.imageUrl}
				alt={room.title}
				aspectRatio={16 / 9}
				objectFit={"cover"}
			/>
			<Card.Body gap={2}>
				<Heading size={"md"}>{room.title}</Heading>
				<Text color={"fg.muted"} fontSize={"sm"}>
					{room.description}
				</Text>
			</Card.Body>
			<Card.Footer justifyContent={"space-between"}>
				<Badge colorPalette={"green"} size={"lg"}>
					${room.ratePerNight} / night
				</Badge>
				<Button
					size={"sm"}
					variant={inCart ? "subtle" : "solid"}
					colorPalette={inCart ? "gray" : "green"}
					onClick={() =>
						inCart ? cartStore.removeRoom(room.id) : cartStore.addRoom(room)
					}
				>
					{inCart ? "Remove" : "Add to cart"}
				</Button>
			</Card.Footer>
		</Card.Root>
	);
});

export default RoomCard;
