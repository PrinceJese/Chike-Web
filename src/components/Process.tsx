import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import processlogo1 from "../assets/processlogo1.svg";
import processlogo2 from "../assets/processlogo2.svg";
import processlogo3 from "../assets/processlogo3.svg";
import processlogo4 from "../assets/processlogo4.svg";
import processicon1 from "../assets/processicon1.svg";
import processicon2 from "../assets/processicon2.svg";
import processicon3 from "../assets/processicon3.svg";
import processicon4 from "../assets/processicon4.svg";

const Process = () => {
  return (
    <Box h='100vh'>
      <Box h='80%' bg='#FFF3E4'>
        <Container maxW='7xl' h='100%'>
          <Flex w='full' justify='center' align='center' h='full'>
            <Flex w='full' align='flex-start' justify='space-between'>
              <VStack w='26%' align='flex-start' spacing='20px'>
                <Text fontSize='30' fontWeight='bold'>
                  What I do
                </Text>

                <Text fontSize='15px'>
                  With a background in both user interface and experience design, I have a
                  well-rounded skill set that allows me to tackle projects of various scales and
                  types. Whether it's designing a simple landing page or a complete mobile
                  application, I am up for the challenge.
                </Text>
              </VStack>

              <VStack w='26%' spacing='40px'>
                <VStack w='full'>
                  <Image src={processicon1} />
                  <Text fontSize='16px' fontWeight='bold'>
                    Visual Design
                  </Text>
                  <Text align='center' fontSize='15px'>
                    I am skilled in the art of visual communication and story telling through the
                    use of color, typography, imagery, and layout to create visually appealing and
                    effective designs.
                  </Text>
                </VStack>

                <VStack w='full'>
                  <Image src={processicon2} />
                  <Text fontSize='16px' fontWeight='bold'>
                    UX Writing
                  </Text>
                  <Text align='center' fontSize='15px'>
                    Working at Facebook has taught me a lot about how to understand users, solve
                    problems and build great products.
                  </Text>
                </VStack>
              </VStack>

              <VStack w='26%' spacing='40px'>
                <VStack w='full'>
                  <Image src={processicon3} />
                  <Text fontSize='16px' fontWeight='bold'>
                    Ux Research
                  </Text>
                  <Text align='center' fontSize='15px'>
                    I am proficient in the area of systematic study of users and their requirements
                    — creating a product or service that meets user requirements in the most
                    effective and satisfying way possible.
                  </Text>
                </VStack>

                <VStack w='full'>
                  <Image src={processicon4} />
                  <Text fontSize='16px' fontWeight='bold'>
                    Interaction Design
                  </Text>
                  <Text align='center' fontSize='15px'>
                    Working at Facebook has taught me a lot about how to understand users, solve
                    problems and build great products.
                  </Text>
                </VStack>
              </VStack>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box h='20%' bg='#000000'>
        <Container maxW='7xl' h='100%'>
          <Flex justify='space-around' align='center' w='full' h='full'>
            <Image src={processlogo1} w='45px' />
            <Image src={processlogo2} w='45px' />
            <Image src={processlogo3} w='45px' />
            <Image src={processlogo4} w='45px' />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Process;

{
  /* <HStack justify='space-around' w='full'>
            <Image src={processlogo1} w='45px' />
            <Image src={processlogo2} w='45px' />
            <Image src={processlogo3} w='45px' />
            <Image src={processlogo4} w='45px' />
          </HStack> */
}
