"use client";

import { Button } from "@chakra-ui/react";
import { deleteImage } from "@/app/actions/deleteImage";

export const DeleteButton = ({ name }: { name: string }) => {
	return <Button onClick={() => deleteImage(name)}>Delete</Button>;
};
