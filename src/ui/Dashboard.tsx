"use client";
import React, { useState, useEffect } from "react";
import { Button, Flex, Image, Heading, Input } from "@chakra-ui/react";
import { supabase } from "../lib/supabaseClient";
import { uploadImage, saveFileMetadata } from "../backend/hooks";

export const Dashboard: React.FC = () => {
	const [file, setFile] = useState<File | null>(null);
	const [images, setImages] = useState<string[]>([]);

	const handleFileUpload = async () => {
		const {
			data: { user },
		} = await supabase.auth.getUser();
		if (user && file) {
			const fileUrl = await uploadImage(user.id, file);
			if (fileUrl) {
				await saveFileMetadata(user.id, fileUrl);
				setImages([...images, fileUrl]);
			}
		}
	};

	useEffect(() => {
		const fetchImages = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			if (user) {
				const { data: userFiles } = await supabase
					.from("user_files")
					.select("file_url")
					.eq("user_id", user.id);

				if (userFiles) {
					setImages(userFiles.map((file: { file_url: string }) => file.file_url));
				}
			}
		};

		void fetchImages();
	}, []);

	return (
		<Flex minH="100vh" direction="column" align="left" justify="center" bg="gray.100">
			<Input
				type="file"
				w="50%"
				onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
			/>
			<Button
				onClick={handleFileUpload}
				w="200px"
				colorScheme="teal"
				bg="#A51813"
				_hover={{ bg: "#861110" }}
			>
				Upload
			</Button>
			<div>
				<Heading mb="6" textAlign="center" fontSize="2xl">
					Uploaded Images
				</Heading>
				<ul>
					{images.map((image, index) => (
						<li key={index}>
							<Image src={image} alt={`Uploaded ${index}`} width={200} height={200} />
						</li>
					))}
				</ul>
			</div>
		</Flex>
	);
};
