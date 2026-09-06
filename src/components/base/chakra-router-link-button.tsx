import {
	Button,
	type ButtonProps,
	Link as ChakraLink,
	IconButton,
	type IconButtonProps,
	type LinkProps,
} from "@chakra-ui/react";
import { createLink } from "@tanstack/react-router";
import { forwardRef } from "react";

/* createLink infers the wrapped component's props, so these generics are what
   gives the call sites autocompletion on Chakra style props. Typing them `any`
   silently erases every one of them. `href` is dropped from each — TanStack
   derives it from `to`. */

// Router-compatible Chakra Link
export const RouterLink = createLink(
	forwardRef<HTMLAnchorElement, Omit<LinkProps, "href">>((props, ref) => {
		return <ChakraLink ref={ref} {...props} />;
	}),
);

// Router-compatible Chakra Button
export const RouterButton = createLink(
	forwardRef<HTMLButtonElement, Omit<ButtonProps, "href">>((props, ref) => {
		return <Button ref={ref} as="button" {...props} />;
	}),
);

// Router-compatible Chakra IconButton
export const RouterIconButton = createLink(
	forwardRef<HTMLButtonElement, Omit<IconButtonProps, "href">>((props, ref) => {
		return <IconButton ref={ref} as="button" {...props} />;
	}),
);
