import { Box, Button, Container, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import pic from "@/assets/work1.png";

const Works = () => {
  return (
    <Container maxW='7xl'>
      <VStack align='flex-start' color='white' py='50px'>
        <Text fontSize={{ base: "25px", xl: "25px" }} fontWeight='bold'>
          Website Design
        </Text>

        <SimpleGrid pt='20px' pb='50px' w='full' columns={{ base: 1, xl: 2 }} spacing='20px'>
          <Box>
            <Image src={pic} />
          </Box>

          <Box>
            <Image src={pic} />
          </Box>

          <Box>
            <Image src={pic} />
          </Box>

          <Box>
            <Image src={pic} />
          </Box>

          <Box>
            <Image src={pic} />
          </Box>
        </SimpleGrid>

        <Text fontSize={{ base: "25px", xl: "25px" }} fontWeight='bold'>
          Mobile Design
        </Text>

        <SimpleGrid pt='20px' pb='70px' w='full' columns={{ base: 1, xl: 2 }} spacing='20px'>
          <Box>
            <Image src={pic} />
          </Box>

          <Box>
            <Image src={pic} />
          </Box>

          <Box>
            <Image src={pic} />
          </Box>
        </SimpleGrid>

        <Box pb='20px'>
          <Text fontSize={{ base: "25px", xl: "25px" }} fontWeight='bold'>
            Wanna get Started?
          </Text>
        </Box>

        <Box pb='50px'>
          <Button
            bg='#9d9d9dc0'
            w='250px'
            borderRadius='2px'
            _active={{ bgColor: "#9d9d9d92" }}
            _hover={{ bgColor: "#9d9d9d92" }}
            fontSize={{ base: "17px", xl: "14px" }}
          >
            SEND ME AN EMAIL
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Works;
