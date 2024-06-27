import Image from "next/image";
import Link from "next/link";

export const Header = () => {
	return (
		<header className="fixed flex h-24 w-full bg-white shadow-xl">
			<nav className="flex h-full w-full items-center justify-between px-4 2xl:px-16">
				<div>
					<Link href="/">
						<Image src={"/logo.png"} alt="Logo" width={70} height={70} className="cursor-pointer" />
					</Link>
				</div>
				<ul className="flex justify-between">
					<li className="ml-10 mr-10 text-xl uppercase">Hello, Jan Kowalski</li>
					<li>
						<button className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
							Sign out
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};
