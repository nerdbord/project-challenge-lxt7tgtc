"use client";

import { IconButton, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { TrashIcon } from "@/assets/icons/TrashIcon";
import { deleteImage } from "@/app/actions/deleteImage";

export const DeleteButton = ({ name }: { name: string }) => {
	const toast = useToast();
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async (name: string) => {
		try {
			setIsDeleting(true);
			await deleteImage(name);
			toast({
				title: "Image deleted successfully",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Failed to delete image",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		} finally {
			setIsDeleting(false);
		}
	};
	return (
		<IconButton
			aria-label="Delete icon"
			onClick={() => handleDelete(name)}
			size="md"
			icon={<TrashIcon />}
			bg="#ef4f4a"
			_hover={{ bg: "#861110" }}
			isLoading={isDeleting}
		/>
	);
};
