import { Button, Link as ChakraLink, IconButton } from "@chakra-ui/react";
import { createLink } from "@tanstack/react-router";
import { forwardRef } from "react";

// Router-compatible Chakra Link
export const RouterLink = createLink(
	forwardRef<HTMLAnchorElement, any>((props, ref) => {
		return <ChakraLink ref={ref} {...props} />;
	}),
);

// Router-compatible Chakra Button
export const RouterButton = createLink(
	forwardRef<HTMLButtonElement, any>((props, ref) => {
		return <Button ref={ref} as="button" {...props} />;
	}),
);

// Router-compatible Chakra IconButton
export const RouterIconButton = createLink(
	forwardRef<HTMLButtonElement, any>((props, ref) => {
		return <IconButton ref={ref} as="button" {...props} />;
	}),
);
