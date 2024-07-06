import { ListItem, HStack, Image, Box, Button } from "@chakra-ui/react";
import { DeleteButton } from "@/ui/DeleteButton";
import { type ImageData } from "@/app/actions/getUserImages";
import { CopyButton } from "@/ui/CopyButton";

type ImageListItemProps = ImageData & {
	onSelect: (name: string) => void;
	isSelected: boolean;
};

export const ImageListItem: React.FC<ImageListItemProps> = ({
	name,
	url,
	onSelect,
	isSelected,
}) => {
	return (
		<ListItem
			padding="4"
			backgroundColor="gray.50"
			borderRadius="md"
			boxShadow="md"
			display="flex"
			alignItems="center"
			justifyContent="space-around"
		>
			<Button
				variant="outline"
				size="xs"
				colorScheme="teal"
				className="h-8 w-8 shrink-0"
				onClick={() => {
					onSelect(name);
				}}
				aria-label="check button"
			>
				{isSelected && <>&#10003;</>}
			</Button>
			<Box>
				<Image
					alt="Image preview"
					src={url}
					boxSize="100px"
					objectFit="cover"
					border="black"
					borderRadius="md"
					bg="white"
				/>
			</Box>
			<HStack spacing={2}>
				<CopyButton toCopy={url} />
				<DeleteButton name={name} />
			</HStack>
		</ListItem>
	);
};
