import { Box, Container, Flex, VStack, Text, useColorModeValue } from "@chakra-ui/react";

const Brands = () => {
  const textColor = useColorModeValue("black", "white");

  return (
    <Container maxW='7xl'>
      <Flex align='center' w='full' py={{ base: "50px", xl: "110px" }}>
        <VStack
          align='flex-start'
          w='full'
          color={textColor}
          spacing={{ base: "50px", xl: "70px" }}
        >
          <VStack align='flex-start'>
            <Text fontSize='16px' fontWeight='bold' color='#8491A0'>
              Work Experience
            </Text>

            <Text fontSize={{ base: "25px", xl: "33px" }} fontWeight='bold' lineHeight='32px'>
              Companies & Brands I have Worked
              <br /> with in the past
            </Text>
          </VStack>

          <Box className='overflow' w='full' overflowY='hidden'>
            <Flex
              gap='70px'
              w={{ base: "full", xl: "2500px" }}
              direction={{ base: "column", xl: "row" }}
            >
              <VStack w={{ base: "full", xl: "370px" }} align='flex-start' spacing='20px'>
                <Text fontSize='100px' color='#8491A0' lineHeight='80px'>
                  01
                </Text>

                <Text as='span' fontSize='24px' fontWeight='bold'>
                  <Text as='span' color='#3CC74E'>
                    Stylist Piazza,{""}
                  </Text>{" "}
                  Product Designer
                </Text>

                <Text fontSize='16px'>
                  I helped build the Stylist Piazza app that connects beauty technicians and
                  customers in Lagos.
                </Text>
              </VStack>

              <VStack w={{ base: "full", xl: "370px" }} align='flex-start' spacing='20px'>
                <Text fontSize='100px' color='#8491A0' lineHeight='80px'>
                  02
                </Text>

                <Text as='span' fontSize='24px' fontWeight='bold'>
                  <Text as='span' color='#609BFF'>
                    X10 Agency,{""}
                  </Text>{" "}
                  UI/UX Designer
                </Text>

                <Text fontSize='16px'>
                  I was design lead of a team that worked on a number of Web3 and NFT projects.
                </Text>
              </VStack>

              <VStack w={{ base: "full", xl: "370px" }} align='flex-start' spacing='20px'>
                <Text fontSize='100px' color='#8491A0' lineHeight='80px'>
                  03
                </Text>

                <Text as='span' fontSize='24px' fontWeight='bold'>
                  <Text as='span' color='#E95D90'>
                    Septagon,{""}
                  </Text>{" "}
                  Product Designer
                </Text>

                <Text fontSize='16px'>
                  I lead the team that’s designing the Web3 product; Septagon, which aims to link
                  property ownership to the blockchain.
                </Text>
              </VStack>

              <VStack w={{ base: "full", xl: "370px" }} align='flex-start' spacing='20px'>
                <Text fontSize='100px' color='#8491A0' lineHeight='80px'>
                  04
                </Text>

                <Text as='span' fontSize='24px' fontWeight='bold'>
                  <Text as='span' color='orange'>
                    Dtunes,{""}
                  </Text>{" "}
                  Ui/ux Designer
                </Text>

                <Text fontSize='16px'>
                  I helped to design the website of the fintech company and also incorporated a
                  WebApp feature.
                </Text>
              </VStack>

              <VStack w={{ base: "full", xl: "370px" }} align='flex-start' spacing='20px'>
                <Text fontSize='100px' color='#8491A0' lineHeight='80px'>
                  05
                </Text>

                <Text as='span' fontSize='24px' fontWeight='bold'>
                  <Text as='span' color='purple'>
                    Ecrivains Consult,{""}
                  </Text>{" "}
                  Graphics Designer
                </Text>

                <Text fontSize='16px'>
                  I helped to design the website of the fintech company and also incorporated a
                  WebApp feature.
                </Text>
              </VStack>
            </Flex>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Brands;
