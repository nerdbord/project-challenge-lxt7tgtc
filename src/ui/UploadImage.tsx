import {
	Input,
	FormControl,
	FormLabel,
	Text,
	Link,
	Box,
	Center,
	Flex,
	Image,
	HStack,
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
							<FormControl mt={4}>
								<FormLabel
									htmlFor="browse"
									cursor="pointer"
									color="teal.500"
									textAlign="center"
									fontWeight="semibold"
									textTransform="uppercase"
								>
									Click or Drag & drop your image here
									<Input
										type="file"
										accept=".png, .jpg, .jpeg"
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
					<Flex width="20%" alignItems="center" maxHeight="80vh">
						<Flex
							// key={index}
							width="full"
							padding="2"
							backgroundColor="gray.50"
							borderRadius="md"
							boxShadow="md"
							direction="column"
							gap="2"
						>
							<HStack width="full" spacing={4} alignItems="center" justifyContent="space-around">
								<Link isExternal>
									<Image
										alt=""
										src="/logo.png"
										boxSize="70px"
										objectFit="cover"
										border="black"
										borderRadius="md"
									/>
								</Link>

								<Button colorScheme="teal" size="sm">
									Copy
								</Button>
								<Button bg="#ef4f4a" _hover={{ bg: "#861110" }} size="sm" color="white">
									Delete
								</Button>
							</HStack>
							<HStack width="full" spacing={4} alignItems="center" justifyContent="space-around">
								<Link isExternal>
									<Image
										alt=""
										src="/upload.jpg"
										boxSize="70px"
										objectFit="cover"
										border="black"
										borderRadius="md"
									/>
								</Link>

								<Button colorScheme="teal" size="sm">
									Copy
								</Button>
								<Button bg="#ef4f4a" _hover={{ bg: "#861110" }} size="sm" color="white">
									Delete
								</Button>
							</HStack>
							<HStack width="full" spacing={4} alignItems="center" justifyContent="space-around">
								<Link isExternal>
									<Image
										alt=""
										src="/logo.png"
										boxSize="70px"
										objectFit="cover"
										border="black"
										borderRadius="md"
									/>
								</Link>

								<Button colorScheme="teal" size="sm">
									Copy
								</Button>
								<Button bg="#ef4f4a" _hover={{ bg: "#861110" }} size="sm" color="white">
									Delete
								</Button>
							</HStack>
							<HStack width="full" spacing={4} alignItems="center" justifyContent="space-around">
								<Link isExternal>
									<Image
										alt=""
										src="/upload.jpg"
										boxSize="70px"
										objectFit="cover"
										border="black"
										borderRadius="md"
									/>
								</Link>

								<Button colorScheme="teal" size="sm">
									Copy
								</Button>
								<Button bg="#ef4f4a" _hover={{ bg: "#861110" }} size="sm" color="white">
									Delete
								</Button>
							</HStack>
						</Flex>
					</Flex>
				</HStack>
			</Flex>
		</Center>
	);
};
