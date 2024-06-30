"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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

		void fetchImages(); // Użyj `void` aby oznaczyć jako świadomie nieawaitowaną obietnicę
	}, []);

	return (
		<div>
			<h1>Dashboard</h1>
			<input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
			<button onClick={handleFileUpload}>Upload</button>
			<div>
				<h2>Uploaded Images</h2>
				<ul>
					{images.map((image, index) => (
						<li key={index}>
							<Image src={image} alt={`Uploaded ${index}`} width={200} height={200} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
