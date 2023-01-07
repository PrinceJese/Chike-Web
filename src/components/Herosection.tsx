import { Box, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import coder from "../assets/coder.svg";
import location from "../assets/location.svg";

const Herosection = () => {
  return (
    <Box id='hero' h='100vh' color='white' p={0}>
      <Container maxW='7xl' p={0}>
        <Flex justify='center'>
          <VStack w='600px' pt={{ xl: "120px", "2xl": "180px" }}>
            <HStack position={"relative"}>
              <Text
                align='center'
                fontSize={{ xl: "50px", "2xl": "65px" }}
                fontWeight='bold'
                lineHeight={{ xl: "50px", "2xl": "60px" }}
              >
                Hi, I am Chike.
              </Text>

              <Image src={coder} w='35px' position={"absolute"} right='-28px' top='-8px' />
            </HStack>

            <Text
              as='span'
              align='center'
              fontSize={{ xl: "50px", "2xl": "65px" }}
              fontWeight='bold'
              lineHeight={{ xl: "50px", "2xl": "60px" }}
            >
              A Product Designer{" "}
              <Text as='span' color='rgba(255, 255, 255, 0.5);'>
                based in Lagos.
              </Text>
            </Text>

            <Text lineHeight='25px' align='center' color='rgba(255, 255, 255, 0.75);'>
              I help brands and businesses grow and achieve their goals by designing functional and
              user centric digital products.
            </Text>

            <HStack pt={{ xl: "25px", "2xl": "40px" }}>
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
