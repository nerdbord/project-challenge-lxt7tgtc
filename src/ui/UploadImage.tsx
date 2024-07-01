import { Input, Text, Box, Center, Image } from "@chakra-ui/react";

export const UploadImage = () => {
	// const accept="image/jpeg, image/jpg, image/png"
	return (
		<Center height="100vh">
			<Box
				width={["90%", "70%", "50%", "40%"]}
				border="3px dashed"
				borderColor="teal.500"
				borderRadius="md"
				padding="6"
				backgroundColor="gray.50"
			>
				<Center flexDirection="column">
					<Image
						boxSize="90px"
						objectFit="cover"
						src="/upload.jpg"
						alt="Upload box decoration image"
					/>
					<Text
						as="u"
						mt={4}
						textTransform="uppercase"
						color="teal.500"
						fontWeight="semibold"
						_hover={{ fontWeight: "bold" }}
					>
						<label htmlFor="browse" className="cursor-pointer">
							Click or Drag & drop your image here
							<Input type="file" accept=".png, .jpg, .jpeg" id="browse" name="file" hidden />
						</label>
					</Text>
					<Text as="sub" mt={4} color="gray.700" fontSize="8px">
						*Acceptable file formats: JPG, PNG, JPEG
					</Text>
				</Center>
			</Box>
		</Center>
	);
};
