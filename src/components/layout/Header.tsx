import { Badge, Box, Container, HStack, IconButton } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { IoCart as ShoppingCartIcon } from "react-icons/io5";
import CartDrawer from "#/components/CartDrawer";
import { cartStore } from "#/stores/cartStore";
import { RouterLink } from "../base/chakra-router-link-button";
import { Logo } from "../base/logo";

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
	{ url: "/design-system", title: "Design System" },
];

const Header = observer(function Header() {
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<>
			<Box as={"header"} bg={"bg"} py={3}>
				<Container px={4} maxW={"breakpoint-xl"}>
					<HStack gap={4} w={"full"} justify={"space-between"}>
						<Logo />
						<HStack gap={12} w={"full"} as={"nav"} justify={"flex-end"}>
							{links.map((item) => (
								<RouterLink
									key={item.url}
									to={item.url}
									color={"kachi.600"}
									_hover={{ color: "beni.600" }}
									_active={{ color: "beni.600", textDecoration: "underline" }}
								>
									{item.title}
								</RouterLink>
							))}

							<Box position={"relative"} display={"inline-flex"}>
								<IconButton
									aria-label={"Open cart"}
									onClick={() => setCartOpen(true)}
									variant={"ghost"}
								>
									<ShoppingCartIcon />
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
					</HStack>
				</Container>
			</Box>

			<CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
		</>
	);
});

export default Header;
