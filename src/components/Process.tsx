import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import processlogo1 from "@/assets/processlogo1.svg";
import processlogo2 from "@/assets/processlogo2.svg";
import processlogo3 from "@/assets/processlogo3.svg";
import processlogo4 from "@/assets/processlogo4.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";
import icon4 from "@/assets/icon4.svg";
import icon1 from "@/assets/icon1.svg";

const Process = () => {
  return (
    <Box h={{ base: "auto", xl: "100vh" }}>
      <Box h='80%' bg='#FFF3E4'>
        <Container maxW='7xl' h='100%'>
          <Flex w='full' justify='center' align='center' h='full' id='process'>
            <Flex
              w={{ base: "80%", xl: "full" }}
              align='flex-start'
              justify='space-between'
              direction={{ base: "column", xl: "row" }}
              gap={{ base: "50px", xl: "0px" }}
              py={{ base: "50px", xl: "0px" }}
            >
              <VStack
                w={{ base: "full", xl: "26%" }}
                align={{ base: "center", xl: "flex-start" }}
                spacing={{ base: "0px", xl: "20px" }}
              >
                <Text fontSize='30' fontWeight='bold'>
                  What I do
                </Text>

                <Text
                  align={{ base: "center", xl: "initial" }}
                  fontSize={{ base: "18px", xl: "16px" }}
                >
                  With a background in both user interface and experience design, I have a
                  well-rounded skill set that allows me to tackle projects of various scales and
                  types. Whether it's designing a simple landing page or a complete mobile
                  application, I am up for the challenge.
                </Text>
              </VStack>

              <VStack w={{ base: "full", xl: "26%" }} spacing='40px'>
                <VStack w='full'>
                  <Image src={icon1} />
                  <Text fontSize={{ base: "19px", xl: "16px" }} fontWeight='bold'>
                    Visual Design
                  </Text>
                  <Text align='center' fontSize={{ base: "18px", xl: "16px" }}>
                    I am skilled in the art of visual communication and story telling through the
                    use of color, typography, imagery, and layout to create visually appealing and
                    effective designs.
                  </Text>
                </VStack>

                <VStack w='full'>
                  <Image src={icon2} />
                  <Text fontSize={{ base: "19px", xl: "16px" }} fontWeight='bold'>
                    UX Writing
                  </Text>
                  <Text align='center' fontSize={{ base: "18px", xl: "16px" }}>
                    Working at Facebook has taught me a lot about how to understand users, solve
                    problems and build great products.
                  </Text>
                </VStack>
              </VStack>

              <VStack w={{ base: "full", xl: "26%" }} spacing='40px'>
                <VStack w='full'>
                  <Image src={icon3} />
                  <Text fontSize={{ base: "19px", xl: "16px" }} fontWeight='bold'>
                    Ux Research
                  </Text>
                  <Text align='center' fontSize={{ base: "18px", xl: "16px" }}>
                    I am proficient in the area of systematic study of users and their requirements
                    — creating a product or service that meets user requirements in the most
                    effective and satisfying way possible.
                  </Text>
                </VStack>

                <VStack w='full'>
                  <Image src={icon4} />
                  <Text fontSize={{ base: "19px", xl: "16px" }} fontWeight='bold'>
                    Interaction Design
                  </Text>
                  <Text align='center' fontSize={{ base: "18px", xl: "16px" }}>
                    Working at Facebook has taught me a lot about how to understand users, solve
                    problems and build great products.
                  </Text>
                </VStack>
              </VStack>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box h={{ base: "80px", xl: "20%" }} bg='#000000'>
        <Container maxW='7xl' h='100%'>
          <Flex justify='space-around' align='center' w='full' h='full'>
            <Image src={processlogo1} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo2} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo3} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo4} w={{ base: "35px", xl: "45px" }} />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Process;
