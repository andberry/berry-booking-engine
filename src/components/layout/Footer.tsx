import { Box, Container } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box as={"footer"} bg={"black"} color={"white"} fontSize={"sm"}>
			<Container px={4} fluid>
				This is footer
			</Container>
		</Box>
	);
}
