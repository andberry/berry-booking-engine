import { createRootRoute, Outlet } from "@tanstack/react-router";

import "../styles.css";
import Footer from "#/components/layout/Footer";
import Header from "#/components/layout/Header";
import { Provider as ChakraUiProvider } from "#/components/misc/provider";

const NotFound = () => (
	<main className="w-full h-screen flex items-center justify-center text-center text-red-600 font-bold">
		<div>404 - Not Found Error</div>
	</main>
);

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: NotFound,
});

function RootComponent() {
	return (
		<ChakraUiProvider>
			<Header />
			<Outlet />
			<Footer />
		</ChakraUiProvider>
	);
}
