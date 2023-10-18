import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  chakra,
  shouldForwardProp,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import coder from "@/assets/coder.svg";
import location from "@/assets/location.svg";
import locationDark from "@/assets/locationdark.svg";
import { motion, isValidMotionProp } from "framer-motion";

const Herosection = () => {
  const { colorMode } = useColorMode();

  const textColor = useColorModeValue("black", "white");
  const textColor2 = useColorModeValue("rgba(0, 0, 0, 0.75)", "rgba(255, 255, 255, 0.75)");
  const textColor3 = useColorModeValue("rgba(0, 0, 0, 0.5)", "rgba(255, 255, 255, 0.5);");

  const bgColor = useColorModeValue("#FFF3E4", "linear-gradient(90deg, #181823 62%, #000000 38%)");

  const ChakraImg = chakra(motion(Image), {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const ChakraText = chakra(motion(Text), {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <Box h='100vh' color={textColor} p={0} bg={bgColor}>
      <Container maxW='7xl' p={0} id='about' h='full'>
        <Flex justify='center' align='center' h='full'>
          <VStack
            w={{ base: "86%", xl: "full" }}
            // pt={{ base: "170px", "2xl": "200px" }}
          >
            <HStack position={"relative"}>
              <Text
                align='center'
                fontSize={{ base: "36px", xl: "128px" }}
                fontWeight='bold'
                lineHeight={{ base: "50px", xl: "128px" }}
              >
                AYOMIDE CHIKE
              </Text>

              {/* <Image
                src={coder}
                w={{ base: "25px", xl: "35px" }}
                position={"absolute"}
                right='-28px'
                top='-8px'
              /> */}
            </HStack>

            <Text
              align='center'
              fontSize={{ base: "28px", xl: "64px" }}
              fontWeight='bold'
              lineHeight={{ base: "35px", xl: "64px" }}
            >
              Product Designer
            </Text>

            <Text
              lineHeight={{ base: "20px", xl: "25px" }}
              fontSize={{ base: "17px", xl: "20px" }}
              w={{ base: "full", xl: "750px" }}
              align='center'
              color={textColor2}
            >
              I help brands and businesses grow and achieve their goals by designing functional and
              user centric digital products.
            </Text>

            <HStack pt={{ base: "40px", xl: "25px", "2xl": "40px" }}>
              <ChakraImg
                src={colorMode === "light" ? locationDark : location}
                animate={{ y: [0, -25, 10, -9, 0] }}
                // @ts-ignore
                transition={{ duration: 1, ease: "easeInOut" }}
              />

              <ChakraText
                color={textColor3}
                animate={{ y: [0, -25, 10, -9, 0] }}
                fontSize='20px'
                // @ts-ignore
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Lagos, Nigeria
              </ChakraText>
            </HStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Herosection;
