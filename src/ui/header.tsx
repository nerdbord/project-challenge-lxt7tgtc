import { Image, Box, Flex, Text, List, ListItem, Link } from "@chakra-ui/react";
import { createClient } from "@/utils/supabase/server";
import { LogOutButton } from "@/ui/LogOutButton";

export const Header = async () => {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	console.log("user", user);

	return (
		<Box
			as="header"
			pos="fixed"
			w="100%"
			h="110px"
			boxShadow="xl"
			bg="white"
			px="32px"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<nav style={{ width: "100%" }}>
				<Flex alignItems="center" justifyContent="space-between" w="100%">
					<Link href="/" display="flex" alignItems="center">
						<Image borderRadius="full" boxSize="80px" src="/logo.png" alt="Logo" cursor="pointer" />
					</Link>
					<List
						styleType="none"
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						gap="20px"
						p="0"
						m="0"
					>
						<ListItem>
							<Text fontSize="20px" textTransform="uppercase">
								Hello, {user?.email || "Guest"}
							</Text>
						</ListItem>
						<ListItem>
							<LogOutButton />
						</ListItem>
					</List>
				</Flex>
			</nav>
		</Box>
	);
};
