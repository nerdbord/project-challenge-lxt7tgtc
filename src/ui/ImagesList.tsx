"use client";
import { List } from "@chakra-ui/react";
import { ImageListItem } from "./ImageListItem";
import { type ImageData } from "@/app/actions/getUserImages";

export const ImagesList = ({ images }: { images: ImageData[] }) => {
	return (
		<List spacing={4} width="100%" maxWidth={800}>
			{images.map((image) => (
				<ImageListItem key={image.name} name={image.name} url={image.url} />
			))}
		</List>
	);
};
