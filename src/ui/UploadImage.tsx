import {
	Input,
	Text,
	Link,
	Box,
	Center,
	Flex,
	Image,
	HStack,
	VStack,
	Button,
} from "@chakra-ui/react";

export const UploadImage = () => {
	// const accept="image/jpeg, image/jpg, image/png"
	return (
		<Center height="100vh">
			<Flex width="full" justifyContent="center" alignItems="center" px={8}>
				<HStack w="full" spacing={8} px={8} justifyContent="center">
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
					<VStack width="40%" alignItems="flex-start" spacing={4} maxHeight="80vh" overflowY="auto">
						<Box
							// key={index}
							width="full"
							padding="2"
							backgroundColor="gray.100"
							borderRadius="md"
							boxShadow="md"
						>
							<HStack width="full" justifyContent="space-between">
								<Link color="teal.500" flex="1" isExternal isTruncated>
									Some URL goes here
								</Link>
								<HStack spacing={2}>
									<Button colorScheme="teal" size="sm">
										Copy
									</Button>
									<Button bg="#ef4f4a" _hover={{ bg: "#861110" }} size="sm" color="white">
										Delete
									</Button>
								</HStack>
							</HStack>
						</Box>
					</VStack>
				</HStack>
			</Flex>
		</Center>
	);
};
