import { ListItem, Link, Image, HStack, IconButton } from "@chakra-ui/react";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { TrashIcon } from "@/assets/icons/TrashIcon";

interface ImageListItemProps {
	id: number;
	src: string;
	onCopy: (src: string) => void;
	onDelete: (id: number) => void;
}

export const ImageListItem: React.FC<ImageListItemProps> = ({ id, src, onCopy, onDelete }) => {
	return (
		<ListItem
			padding="4"
			backgroundColor="gray.50"
			borderRadius="md"
			boxShadow="md"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Link isExternal>
				<Image alt="" src={src} boxSize="80px" objectFit="cover" border="black" borderRadius="md" />
			</Link>
			<HStack spacing={2} ml={4}>
				<IconButton
					aria-label="Copy icon"
					colorScheme="teal"
					size="md"
					padding="12px"
					onClick={() => onCopy(src)}
					icon={<CopyIcon />}
					// boxSize="24px"
				/>
				<IconButton
					aria-label="Delete icon"
					ml={2}
					onClick={() => onDelete(id)}
					size="md"
					padding="12px"
					icon={<TrashIcon />}
					bg="#ef4f4a"
					_hover={{ bg: "#861110" }}
				/>
			</HStack>
		</ListItem>
	);
};
