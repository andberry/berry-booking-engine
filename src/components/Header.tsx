import { Link } from "@tanstack/react-router";

interface ILink {
	url: string;
	title: string;
	target?: "_blank" | "_self";
}
const links: ILink[] = [
	{
		url: "/",
		title: "Home",
	},
	{
		url: "/about",
		title: "About",
	},
	{
		url: "/berry",
		title: "Berry",
	},
	{
		url: "/rooms",
		title: "Rooms",
	},
];
export default function Header() {
	return (
		<header className="sticky top-0 z-50 bg-black text-white">
			<nav className="flexitems-center gap-4">
				{links.map((item) => (
					<Link
						key={item.url}
						to={item.url}
						className="font-ubuntu px-4 py-2 inline-block transition-all duration-100 ease-linear hover:text-[springgreen]"
						activeProps={{ className: "text-[springgreen]" }}
						inactiveProps={{ className: "text-white" }}
					>
						{item.title}
					</Link>
				))}
			</nav>
		</header>
	);
}
