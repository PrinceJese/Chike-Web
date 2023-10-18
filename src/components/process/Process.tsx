import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  VStack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";
import icon4 from "@/assets/icon4.svg";
import icon1 from "@/assets/icon1.svg";

const Process = () => {
  const textColor = useColorModeValue("white", "black");
  const textColor2 = useColorModeValue("#8491A0", "rgba(0, 0, 0, 0.75)");

  const bgColor = useColorModeValue("#181823", "#FFF3E4");
  const { colorMode } = useColorMode();

  return (
    <Box
      py={{ base: "50px", xl: "90px" }}
      bg={bgColor}
      color={textColor2}
      _hover={{
        bg: colorMode === "dark" ? "#181823" : "#FFF3E4",
        color: colorMode === "dark" ? "white" : "black",
        transition: "0.6s ease all",
      }}
    >
      <Container maxW='7xl' h='100%'>
        <Flex w='full' justify='center' align='center' h='full' id='process'>
          <Flex
            w={{ base: "80%", xl: "full" }}
            align='flex-start'
            justify='space-between'
            direction={{ base: "column", xl: "row" }}
            gap={{ base: "50px", xl: "0px" }}
          >
            <VStack
              w={{ base: "full", xl: "26%" }}
              align={{ base: "center", xl: "flex-start" }}
              spacing={{ base: "0px", xl: "20px" }}
            >
              <Text fontSize='48px' fontWeight='bold'>
                What I do
              </Text>

              <Text
                align={{ base: "center", xl: "initial" }}
                fontSize={{ base: "18px", xl: "18px" }}
                // color={textColor2}
                // _hover={{ color: "white" }}
              >
                With a background in both user interface and experience design, I have a
                well-rounded skill set that allows me to tackle projects of various scales and
                types. Whether it's designing a simple landing page or a complete mobile
                application, I am up for the challenge.
              </Text>
            </VStack>

            <VStack w={{ base: "full", xl: "26%" }} spacing='40px'>
              <VStack w='full' _hover={{ color: "pink.600", transition: "0.5s ease-out" }}>
                <Image src={icon1} />
                <Text fontSize={{ base: "19px", xl: "24px" }} fontWeight='bold'>
                  Visual Design
                </Text>
                <Text
                  align='center'
                  fontSize={{ base: "18px", xl: "16px" }}
                  // color={textColor2}
                  _hover={{ color: "pink.600", transition: "0.5s ease-out" }}
                >
                  I am skilled in the art of visual communication and story telling through the use
                  of color, typography, imagery, and layout to create visually appealing and
                  effective designs.
                </Text>
              </VStack>

              <VStack w='full' _hover={{ color: "gray.500", transition: "0.5s ease-out" }}>
                <Image src={icon2} />
                <Text fontSize={{ base: "19px", xl: "24px" }} fontWeight='bold'>
                  UX Writing
                </Text>
                <Text
                  align='center'
                  fontSize={{ base: "18px", xl: "16px" }}
                  // color={textColor2}
                  _hover={{ color: "gray.500", transition: "0.5s ease-out" }}
                >
                  Working at Facebook has taught me a lot about how to understand users, solve
                  problems and build great products.
                </Text>
              </VStack>
            </VStack>

            <VStack w={{ base: "full", xl: "26%" }} spacing='40px'>
              <VStack w='full' _hover={{ color: "green.500", transition: "0.5s ease-out" }}>
                <Image src={icon3} />
                <Text fontSize={{ base: "19px", xl: "24px" }} fontWeight='bold'>
                  Ux Research
                </Text>
                <Text
                  align='center'
                  fontSize={{ base: "18px", xl: "16px" }}
                  // color={textColor2}
                  _hover={{ color: "green.500", transition: "0.5s ease-out" }}
                >
                  I am proficient in the area of systematic study of users and their requirements —
                  creating a product or service that meets user requirements in the most effective
                  and satisfying way possible.
                </Text>
              </VStack>

              <VStack w='full' _hover={{ color: "purple.600", transition: "0.5s ease-out" }}>
                <Image src={icon4} />
                <Text fontSize={{ base: "19px", xl: "24px" }} fontWeight='bold'>
                  Interaction Design
                </Text>
                <Text
                  align='center'
                  fontSize={{ base: "18px", xl: "16px" }}
                  // color={textColor2}
                  _hover={{ color: "purple.600", transition: "0.5s ease-out" }}
                >
                  Working at Facebook has taught me a lot about how to understand users, solve
                  problems and build great products.
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Process;
