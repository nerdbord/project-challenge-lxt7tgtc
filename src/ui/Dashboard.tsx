"use client";

import { Flex, Heading, Input, Image } from "@chakra-ui/react";
import { useState } from "react";
import { uploadImage } from "@/api/actions";

export const Dashboard: React.FC = () => {
	const [image, setImage] = useState<string | null>(null);

	const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file: File | null = e.target.files?.[0] || null;

		if (!file) {
			return null;
		}

		const fileData = new FormData();
		fileData.append("fileUpload", file);

		const url = await uploadImage(fileData);
		if (url) {
			setImage(url);
		}
	};

	return (
		<Flex minH="100vh" direction="column" align="left" justify="center" bg="gray.100">
			<Input
				type="file"
				name="fileUpload"
				id="fileUpload"
				w="50%"
				accept="image/png, image/jpeg, image/jpg"
				onChange={(e) => handleFileUpload(e)}
			/>
			{image && (
				<div>
					<Heading mb="6" textAlign="center" fontSize="2xl">
						Uploaded Image
					</Heading>
					<Image src={image} alt={`Uploaded image`} width={200} height={200} />
				</div>
			)}
		</Flex>
	);
};
