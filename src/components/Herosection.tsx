import { Box, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import coder from "@/assets/coder.svg";
import location from "@/assets/location.svg";

const Herosection = () => {
  return (
    <Box id='hero' h='100vh' color='white' p={0}>
      <Container maxW='7xl' p={0} id='about'>
        <Flex justify='center'>
          <VStack w={{ base: "86%", xl: "600px" }} pt={{ base: "140px", "2xl": "200px" }}>
            <HStack position={"relative"}>
              <Text
                align='center'
                fontSize={{ base: "35px", xl: "60px", "2xl": "75px" }}
                fontWeight='bold'
                lineHeight={{ base: "28px", xl: "50px", "2xl": "60px" }}
              >
                Hi, I am Chike.
              </Text>

              <Image
                src={coder}
                w={{ base: "25px", xl: "35px" }}
                position={"absolute"}
                right='-28px'
                top='-8px'
              />
            </HStack>

            <Text
              align='center'
              fontSize={{ base: "34px", xl: "60px", "2xl": "75px" }}
              fontWeight='bold'
              lineHeight={{ base: "35px", xl: "50px", "2xl": "60px" }}
            >
              A Product Designer
            </Text>

            <Text
              lineHeight={{ base: "20px", xl: "25px" }}
              fontSize={{ base: "18px", "2xl": "25px" }}
              align='center'
              color='rgba(255, 255, 255, 0.75);'
            >
              I help brands and businesses grow and achieve their goals by designing functional and
              user centric digital products.
            </Text>

            <HStack pt={{ base: "40px", xl: "25px", "2xl": "40px" }}>
              <Image src={location} />
              <Text color='rgba(255, 255, 255, 0.5);'>Lagos, Nigeria</Text>
            </HStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Herosection;
