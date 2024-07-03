"use client";
import { List, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ImageListItem } from "./ImageListItem";

interface ImageData {
	id: number;
	src: string;
}
export const ImagesList: React.FC = () => {
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
		<List spacing={4} width="100%">
			{images.map((image) => (
				<ImageListItem
					key={image.id}
					id={image.id}
					src={image.src}
					onCopy={handleCopy}
					onDelete={handleDelete}
				/>
			))}
		</List>
	);
};
