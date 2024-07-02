"use client";
import {
	Input,
	FormControl,
	FormLabel,
	Text,
	Box,
	Center,
	Flex,
	Image,
	VStack,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { PreviewItem } from "./PreviewItem";

interface ImageData {
	id: number;
	src: string;
}

export const UploadImage: React.FC = () => {
	// const accept="image/jpeg, image/jpg, image/png"
	const initialImages: ImageData[] = [
		{ id: 1, src: "/logo.png" },
		{ id: 2, src: "/upload.jpg" },
		{ id: 3, src: "/logo.png" },
		{ id: 4, src: "/upload.jpg" },
	];
	const [images, setImages] = useState<ImageData[]>(initialImages);
	const toast = useToast();

	const handleCopy = (src: string) => {
		navigator.clipboard
			.writeText(window.location.origin + src)
			.then(() => {
				toast({
					title: "Link copied!",
					description: "The image link has been copied to clipboard.",
					status: "success",
					duration: 2000,
					isClosable: true,
				});
			})
			.catch((err) => {
				console.error("Failed to copy: ", err);
			});
	};

	const handleDelete = (id: number) => {
		const filteredImages = images.filter((image) => image.id !== id);
		setImages(filteredImages);
	};
	return (
		<Center height="100vh">
			<Flex width="full" justifyContent="center" alignItems="center" px={8}>
				<VStack w="full" spacing={8} px={8} justifyContent="center">
					<Box
						width={["100%", "80%", "60%", "50%"]}
						border="3px dashed"
						borderColor="teal.500"
						borderRadius="md"
						padding="6"
						backgroundColor="gray.50"
					>
						<Center flexDirection="column">
							<Image
								boxSize="90px"
								objectFit="cover"
								src="/upload.jpg"
								alt="Upload box decoration image"
							/>
							<FormControl mt={4}>
								<FormLabel
									htmlFor="browse"
									cursor="pointer"
									color="teal.500"
									textAlign="center"
									fontWeight="semibold"
									textTransform="uppercase"
								>
									Click or Drag & drop your image here
									<Input
										type="file"
										accept=".png, .jpg, .jpeg"
										id="browse"
										name="file"
										hidden
										// onChange={handleFileChange}
									/>
								</FormLabel>
							</FormControl>
							<Text as="sub" mt={4} color="gray.700" fontSize="8px">
								*Acceptable file formats: JPG, PNG, JPEG
							</Text>
						</Center>
					</Box>
					<Flex gap={4} width="70%" alignItems="center" flexWrap="wrap">
						{images.map((image) => (
							<PreviewItem
								key={image.id}
								id={image.id}
								src={image.src}
								onCopy={handleCopy}
								onDelete={handleDelete}
							/>
						))}
					</Flex>
				</VStack>
			</Flex>
		</Center>
	);
};
