import { IconButton, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@/assets/icons/CopyIcon";

export const CopyButton = ({ toCopy }: { toCopy: string }) => {
	const toast = useToast();

	const handleCopy = (toCopy: string) => {
		navigator.clipboard
			.writeText(toCopy)
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
	return (
		<IconButton
			aria-label="Copy icon"
			colorScheme="teal"
			size="md"
			padding="12px"
			onClick={() => handleCopy(toCopy)}
			icon={<CopyIcon />}
		/>
	);
};
