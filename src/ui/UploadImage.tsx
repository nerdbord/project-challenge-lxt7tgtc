"use client";
import {
	Input,
	FormControl,
	FormLabel,
	Text,
	Box,
	Center,
	Flex,
	Button,
	Stack,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import PreviewImage from "../../public/upload.jpg";
import { Preview } from "./Preview";
import { uploadImage } from "@/app/actions/uploadImage";

export const UploadImage: React.FC = () => {
	const [file, setFile] = useState<File | null>(null);
	const [isDragActive, setIsDragActive] = useState(false);
	const [previewSrc, setPreviewSrc] = useState(PreviewImage.src);
	const [isUploading, setIsUploading] = useState(false);
	const toast = useToast();

	const accept = "image/jpeg, image/jpg, image/png";
	console.log(PreviewImage.src);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file: File | null = event.target.files?.[0] || null;

		if (file && file.type.startsWith("image/")) {
			setFile(file);
			setPreviewSrc(URL.createObjectURL(file));
		}
	};

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		const file: File | null = event.dataTransfer.files?.[0] || null;

		if (file && file.type.startsWith("image/")) {
			setFile(file);
			setPreviewSrc(URL.createObjectURL(file));
		}
		setIsDragActive(false);
	};
	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setIsDragActive(true);
	};

	const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		setIsDragActive(false);
	};

	const handleUpload = async () => {
		if (!file) return;
		try {
			setIsUploading(true);
			const fileData = new FormData();
			fileData.append("fileUpload", file);

			await uploadImage(fileData);
			setPreviewSrc(PreviewImage.src);
			toast({
				title: "Success!",
				description: "Image uploaded successfully.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
		} catch (error) {
			console.error(error);
			toast({
				title: "Error",
				description: "Failed to upload image.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		} finally {
			setIsUploading(false);
		}
	};

	return (
		<Flex maxW="1000px" justifyContent="center" alignItems="center" px={2} margin="0 auto" gap="4">
			<Box
				pt="30px"
				width={["60%", "50%"]}
				border="3px dashed"
				borderColor={isDragActive ? "teal.700" : "teal.500"}
				borderRadius="md"
				padding="16px"
				backgroundColor={isDragActive ? "grey.100" : "gray.50"}
				height="70%"
				onDrop={(e) => handleDrop(e)}
				onDragOver={(e) => handleDragOver(e)}
				onDragLeave={(e) => handleDragLeave(e)}
			>
				<Center flexDirection="row-reverse" gap="2">
					<FormControl
						mt={6}
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<Text
							textTransform="uppercase"
							color="teal.500"
							textAlign="center"
							fontWeight="semibold"
							fontSize="2xl"
							mb="40px"
							mt="30px"
						>
							Drag and drop your image here or
						</Text>
						<Stack spacing={6} direction="row" align="center" mb="24px">
							<FormLabel
								htmlFor="choose-file"
								py="10px"
								lineHeight="1.2"
								transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
								border="3px"
								mb="-1px"
								px="12px"
								borderRadius="4px"
								fontSize="16px"
								fontWeight="semibold"
								bg="teal"
								borderColor="teal"
								color="white"
								_hover={{ bg: "teal.700" }}
								_active={{
									bg: "#4984dd",
									transform: "scale(0.98)",
									borderColor: "#bec3c9",
								}}
								_focus={{
									boxShadow: "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
								}}
							>
								Choose file
								<Input
									type="file"
									accept={accept}
									id="choose-file"
									name="file"
									hidden
									onChange={(e) => handleFileChange(e)}
								/>
							</FormLabel>
							<Button
								colorScheme="red"
								size="md"
								isDisabled={!file || isUploading}
								onClick={() => handleUpload()}
							>
								{isUploading ? "Uploading..." : "Upload"}
							</Button>
						</Stack>
						<Text as="sub" mt={4} color="gray.700" fontSize="8px">
							*Acceptable file formats: JPG, PNG, JPEG
						</Text>
					</FormControl>
				</Center>
			</Box>
			<Preview src={previewSrc} />
		</Flex>
	);
};
