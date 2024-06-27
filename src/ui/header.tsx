import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

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
						<Button
							colorScheme="blue"
							className="cursor-pointer font-bold text-white hover:bg-blue-700"
						>
							Sign out
						</Button>
					</li>
				</ul>
			</nav>
		</header>
	);
};
