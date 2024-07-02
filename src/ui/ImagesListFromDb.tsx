import { List, ListItem, Link, Image, HStack, Button } from "@chakra-ui/react";
// import { TrashIcon } from "@/assets/icons/TrashIcon";
// import { CopyIcon } from "@/assets/icons/CopyIcon";

interface ImagesListFromDbProps {
	id: number;
	src: string;
	onCopy: (src: string) => void;
	onDelete: (id: number) => void;
}

export const ImagesListFromDb: React.FC<ImagesListFromDbProps> = ({
	id,
	src,
	onCopy,
	onDelete,
}) => {
	return (
		<List spacing={4} width="100%">
			<ListItem
				key={id}
				padding="4"
				backgroundColor="gray.50"
				borderRadius="md"
				boxShadow="md"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Link isExternal>
					<Image
						alt=""
						src={src}
						boxSize="80px"
						objectFit="cover"
						border="black"
						borderRadius="md"
					/>
				</Link>
				<HStack spacing={2} ml={4}>
					<Button colorScheme="teal" size="md" onClick={() => onCopy(src)}>
						<Image alt="Copy icon" src="/copy-hyperlink-link-icon.svg" boxSize="24px" />
					</Button>
					<Button
						bg="#ef4f4a"
						_hover={{ bg: "#861110" }}
						size="md"
						color="white"
						ml={2}
						onClick={() => onDelete(id)}
					>
						{/* <TrashIcon /> */}
						<Image alt="trash image" src="/trash.svg" boxSize="24px" />
					</Button>
				</HStack>
			</ListItem>
		</List>
	);
};
