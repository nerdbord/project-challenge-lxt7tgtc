import { Box, Image } from "@chakra-ui/react";

interface PreviewProps {
	src: string;
}

export const Preview: React.FC<PreviewProps> = ({ src }) => {
	return (
		<Box width="300px" height="300px" mx="16px">
			<Image alt="" src={src} boxSize="300px" objectFit="cover" borderRadius="md" />
		</Box>
	);
};
