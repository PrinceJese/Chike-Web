import { Box, Button, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import work2 from "@/assets/frame2.png";
import work3 from "@/assets/work3.png";
import work4 from "@/assets/work4.png";
import work1 from "@/assets/frame.png";

const Jobs = () => {
  return (
    <Box>
      <Container maxW={{ base: "95%", xl: "7xl" }} id='works'>
        <VStack align='flex-start' py='80px' w='full' spacing={{ base: "20px", xl: "50px" }}>
          <Text fontSize='16px' fontWeight='bold' color='#8491A0'>
            My Works
          </Text>

          <Text
            fontSize={{ base: "25px", xl: "35px" }}
            color='#ffffff'
            fontWeight='bold'
            lineHeight='30px'
          >
            Check out some of <br /> my recent works
          </Text>

          <Box borderRadius='20px' h={{ base: "190px", xl: "600px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' backgroundImage={work1}>
              <Box
                className='overlay'
                pt={{ base: "40px", xl: "350px" }}
                pl={{ base: "21px", xl: "60px" }}
              >
                <Text
                  fontSize={{ base: "25px", xl: "32px" }}
                  fontWeight='bold'
                  lineHeight={{ base: "28px", xl: "30px" }}
                  color='#ffffff'
                >
                  T-Connect
                </Text>

                <Box>
                  <Text
                    fontSize='18px'
                    as='em'
                    lineHeight={{ base: "20px", xl: "30px" }}
                    color='#ffffff'
                  >
                    Leading NFT rent and lease Marketplace
                  </Text>
                </Box>

                <Button
                  mt={{ base: "12px", xl: "25px" }}
                  h='45px'
                  px={{ base: "15px", xl: "45px" }}
                  colorScheme='purple'
                >
                  View More
                </Button>
              </Box>
            </Box>
          </Box>

          <Flex justify='space-between' w='full' my='5px'>
            <Box w='48%'>
              <Box
                borderRadius='20px'
                h={{ base: "210px", xl: "800px" }}
                w='full'
                overflow='hidden'
              >
                <Box className='card' borderRadius='20px' h='full' w='full' bgImg={work2}>
                  <Box
                    className='overlay'
                    pt={{ base: "25px", xl: "350px" }}
                    pl={{ base: "16px", xl: "60px" }}
                  >
                    <Text
                      fontSize={{ base: "25px", xl: "32px" }}
                      fontWeight='bold'
                      lineHeight={{ base: "28px", xl: "30px" }}
                      color='#ffffff'
                    >
                      T-Connect
                    </Text>

                    <Box>
                      <Text
                        fontSize='18px'
                        as='em'
                        lineHeight={{ base: "20px", xl: "30px" }}
                        color='#ffffff'
                      >
                        Leading NFT rent and lease Marketplace
                      </Text>
                    </Box>

                    <Button
                      mt={{ base: "12px", xl: "25px" }}
                      h='45px'
                      px={{ base: "15px", xl: "45px" }}
                      colorScheme='purple'
                    >
                      View More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box w='48%'>
              <Box
                borderRadius='20px'
                h={{ base: "210px", xl: "800px" }}
                w='full'
                overflow='hidden'
              >
                <Box className='card' borderRadius='20px' h='full' w='full' bgImg={work3}>
                  <Box
                    className='overlay'
                    pt={{ base: "10px", xl: "350px" }}
                    pl={{ base: "15px", xl: "60px" }}
                  >
                    <Text
                      fontSize={{ base: "25px", xl: "32px" }}
                      fontWeight='bold'
                      lineHeight={{ base: "28px", xl: "30px" }}
                      color='#ffffff'
                    >
                      Bull-Dog Billonaires
                    </Text>

                    <Box>
                      <Text
                        fontSize='18px'
                        as='em'
                        lineHeight={{ base: "20px", xl: "30px" }}
                        color='#ffffff'
                      >
                        NFT Platform Monitoring System
                      </Text>
                    </Box>

                    <Button
                      mt={{ base: "12px", xl: "25px" }}
                      h='45px'
                      px={{ base: "15px", xl: "45px" }}
                      colorScheme='purple'
                    >
                      View More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>

          <Box borderRadius='20px' h={{ base: "190px", xl: "600px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' bgImg={work4}>
              <Box
                className='overlay'
                pt={{ base: "40px", xl: "350px" }}
                pl={{ base: "20px", xl: "60px" }}
              >
                <Text
                  fontSize={{ base: "25px", xl: "32px" }}
                  fontWeight='bold'
                  lineHeight={{ base: "28px", xl: "30px" }}
                  color='#ffffff'
                >
                  Bull-Dog Billonaires
                </Text>

                <Box>
                  <Text
                    fontSize='18px'
                    as='em'
                    lineHeight={{ base: "20px", xl: "30px" }}
                    color='#ffffff'
                  >
                    NFT Platform Monitoring System
                  </Text>
                </Box>

                <Button
                  mt={{ base: "12px", xl: "25px" }}
                  h='45px'
                  px={{ base: "15px", xl: "45px" }}
                  colorScheme='purple'
                >
                  View More
                </Button>
              </Box>
            </Box>
          </Box>

          <HStack w='full' justify='flex-end'>
            <Button
              fontSize='11px'
              fontWeight='bold'
              borderRadius='1px'
              bg='black'
              px='25px'
              py='10px'
              border='1px'
              borderColor='#5221E6'
              color='#ffffff'
              _active={{ bgColor: "#5221E6" }}
              _hover={{ bgColor: "#5221E6" }}
            >
              VIEW ALL PROJECTS
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Jobs;
