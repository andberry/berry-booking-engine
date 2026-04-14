import { Badge, Box, Button, Container, HStack, IconButton } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import CartDrawer from "#/components/CartDrawer";
import { cartStore } from "#/stores/cartStore";

interface ILink {
	url: string;
	title: string;
	target?: "_blank" | "_self";
}
const links: ILink[] = [
	{ url: "/", title: "Home" },
	{ url: "/about", title: "About" },
	{ url: "/berry", title: "Berry" },
	{ url: "/rooms", title: "Rooms" },
];

const Header = observer(function Header() {
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<>
			<Box as={"header"} bg={"black"} color={"lime"}>
				<Container px={4} fluid>
					<HStack as={"nav"} gap={4} justify={"space-between"}>
						<HStack gap={4}>
							{links.map((item) => (
								<Button asChild key={item.url}>
									<Link
										to={item.url}
										className="font-ubuntu px-4 py-2 inline-block transition-all duration-100 ease-linear hover:text-[springgreen] border border-[lime]"
										activeProps={{ className: "text-[springgreen]" }}
										inactiveProps={{ className: "text-white" }}
									>
										{item.title}
									</Link>
								</Button>
							))}
						</HStack>

						<Box position={"relative"} display={"inline-flex"}>
							<IconButton
								variant={"ghost"}
								colorPalette={"lime"}
								aria-label={"Open cart"}
								onClick={() => setCartOpen(true)}
							>
								🛒
							</IconButton>
							{cartStore.roomsNumber > 0 && (
								<Badge
									colorPalette={"green"}
									position={"absolute"}
									top={"-1"}
									right={"-1"}
									borderRadius={"full"}
									fontSize={"xs"}
									minW={4}
									textAlign={"center"}
								>
									{cartStore.roomsNumber}
								</Badge>
							)}
						</Box>
					</HStack>
				</Container>
			</Box>

			<CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
		</>
	);
});

export default Header;
