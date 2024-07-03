import { Box, Image } from "@chakra-ui/react";

interface PreviewProps {
	src: string;
}

export const Preview: React.FC<PreviewProps> = ({ src }) => {
	return (
		<Box>
			<Image alt="" src={src} boxSize="140px" objectFit="cover" borderRadius="md" />
		</Box>
	);
};
