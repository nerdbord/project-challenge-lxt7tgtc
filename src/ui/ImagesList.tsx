"use client";

import { List, Text, VStack, Button, Flex, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ImageListItem } from "./ImageListItem";
import { type ImageData } from "@/app/actions/getUserImages";
import { deleteImage } from "@/app/actions/deleteImage";

export const ImagesList = ({ images }: { images: ImageData[] }) => {
	const [selectedImages, setSelectedImages] = useState<ImageData[]>([]);
	const [isDeleting, setIsDeleting] = useState(false);
	const toast = useToast();

	const handleSelectImage = (name: string) => {
		setSelectedImages((prevSelectedImages) => {
			const isSelected = prevSelectedImages.some((image) => image.name === name);

			if (isSelected) {
				return prevSelectedImages.filter((image) => image.name !== name);
			}

			return [...prevSelectedImages, images.find((image) => image.name === name)!];
		});
	};

	const handleDeleteAll = async () => {
		try {
			setIsDeleting(true);
			await deleteImage(selectedImages.map((image) => image.name));
			toast({
				title: "Images deleted successfully",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Failed to delete images",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<VStack className="w-full max-w-3xl" spacing={8}>
			<Flex className="w-full items-center justify-between">
				<Text className="text-purple text-xl font-bold">
					Selected{" "}
					<Text
						as="span"
						className="rounded-full bg-gray-400 px-3 py-1 text-lg text-gray-200"
					>{`${selectedImages.length}/${images.length}`}</Text>
				</Text>
				<Button
					onClick={handleDeleteAll}
					colorScheme="green"
					isDisabled={selectedImages.length === 0}
					isLoading={isDeleting}
				>
					Delete All Selected
				</Button>
			</Flex>

			<List spacing={4} className="w-full">
				{images.map(({ name, url }) => (
					<ImageListItem
						key={name}
						name={name}
						url={url}
						onSelect={handleSelectImage}
						isSelected={selectedImages.some((image) => image.name === name)}
					/>
				))}
			</List>
		</VStack>
	);
};
