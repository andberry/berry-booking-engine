import {
	Badge,
	Button,
	Drawer,
	HStack,
	IconButton,
	Separator,
	Text,
	VStack,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { cartStore } from "#/stores/cartStore";

interface CartDrawerProps {
	open: boolean;
	onClose: () => void;
}

const CartDrawer = observer(function CartDrawer({ open, onClose }: CartDrawerProps) {
	return (
		<Drawer.Root open={open} onOpenChange={({ open }) => !open && onClose()} placement={"end"}>
			<Drawer.Backdrop />
			<Drawer.Positioner>
				<Drawer.Content>
					<Drawer.Header>
						<Drawer.Title>Your cart</Drawer.Title>
						<Drawer.CloseTrigger asChild>
							<IconButton variant={"ghost"} size={"sm"} aria-label={"Close cart"}>
								✕
							</IconButton>
						</Drawer.CloseTrigger>
					</Drawer.Header>

					<Drawer.Body>
						{cartStore.roomsNumber === 0 ? (
							<Text color={"fg.muted"}>No rooms added yet.</Text>
						) : (
							<VStack align={"stretch"} gap={4}>
								{cartStore.rooms.map((room) => (
									<HStack key={room.id} justify={"space-between"}>
										<VStack align={"start"} gap={0}>
											<Text fontWeight={"semibold"}>{room.title}</Text>
											<Text fontSize={"sm"} color={"fg.muted"}>
												${room.ratePerNight} / night
											</Text>
										</VStack>
										<Button
											size={"xs"}
											variant={"ghost"}
											colorPalette={"red"}
											onClick={() => cartStore.removeRoom(room.id)}
										>
											Remove
										</Button>
									</HStack>
								))}
							</VStack>
						)}
					</Drawer.Body>

					{cartStore.roomsNumber > 0 && (
						<Drawer.Footer flexDirection={"column"} alignItems={"stretch"} gap={3}>
							<Separator />
							<HStack justify={"space-between"}>
								<Text fontWeight={"bold"}>Total</Text>
								<Badge colorPalette={"green"} size={"lg"}>
									${cartStore.total} / night
								</Badge>
							</HStack>
							<Button colorPalette={"green"} width={"full"}>
								Book now
							</Button>
						</Drawer.Footer>
					)}
				</Drawer.Content>
			</Drawer.Positioner>
		</Drawer.Root>
	);
});

export default CartDrawer;
