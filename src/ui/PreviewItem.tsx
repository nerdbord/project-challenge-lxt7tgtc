import { Box, Flex, Link, Image, HStack, Button } from "@chakra-ui/react";

interface PreviewItemProps {
	id: number;
	src: string;
	onCopy: (src: string) => void;
	onDelete: (id: number) => void;
}

export const PreviewItem: React.FC<PreviewItemProps> = ({ id, src, onCopy, onDelete }) => {
	return (
		<Box
			key={id}
			width="30%"
			padding="2"
			backgroundColor="gray.50"
			borderRadius="md"
			boxShadow="md"
		>
			<Flex alignItems="center" justifyContent="center">
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
						<Image alt="trash image" src="/trash.svg" boxSize="24px" />
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
};
