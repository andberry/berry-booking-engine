import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/rooms/$categoryId/$subcategoryId/$roomId",
)({
	component: RouteComponent,
});

function RouteComponent() {
	const { categoryId, subcategoryId, roomId } = Route.useParams();
	return (
		<div>
			Hello from nested category/subcategory/room{" "}
			{`/rooms/${categoryId}/${subcategoryId}/${roomId}`}
		</div>
	);
}
