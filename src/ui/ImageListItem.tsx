import { ListItem, HStack, Image, Box } from "@chakra-ui/react";
import { DeleteButton } from "@/ui/DeleteButton";
import { type ImageData } from "@/app/actions/getUserImages";
import { CopyButton } from "@/ui/CopyButton";

export const ImageListItem: React.FC<ImageData> = ({ name, url }) => {
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
