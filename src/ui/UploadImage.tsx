import { Input, FormControl, FormLabel, Text, Box, Center, Flex, VStack } from "@chakra-ui/react";
import { Preview } from "./Preview";
import { ImagesList } from "./ImagesList";

export const UploadImage: React.FC = () => {
	const accept = "image/jpeg, image/jpg, image/png";

	return (
		<Center height="100vh">
			<Flex width="full" justifyContent="center" alignItems="center" px={8}>
				<VStack w="full" spacing={8} px={8} justifyContent="center">
					<Box
						width={["100%", "80%", "60%", "50%"]}
						border="3px dashed"
						borderColor="teal.500"
						borderRadius="md"
						padding="6"
						backgroundColor="gray.50"
						height="300px"
					>
						<Center flexDirection="column">
							<Preview src={"/upload.jpg"} />
							<FormControl mt={4}>
								<FormLabel
									htmlFor="browse"
									cursor="pointer"
									color="teal.500"
									textAlign="center"
									fontWeight="semibold"
									textTransform="uppercase"
								>
									<Box
										as="button"
										bgColor="teal.500"
										color="black"
										p="10px"
										w="20%"
										textAlign="center"
										m="auto"
										borderRadius="3px"
										mr="10px"
										_hover={{ bgColor: "teal.600" }}
									>
										Upload
									</Box>
									or Drag and drop your image here
									<Input
										type="file"
										accept={accept}
										id="browse"
										name="file"
										hidden
										// onChange={handleFileChange}
									/>
								</FormLabel>
							</FormControl>
							<Text as="sub" mt={4} color="gray.700" fontSize="8px">
								*Acceptable file formats: JPG, PNG, JPEG
							</Text>
						</Center>
					</Box>
					<ImagesList />
				</VStack>
			</Flex>
		</Center>
	);
};
