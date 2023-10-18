import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import work2 from "@/assets/frame2.png";
import flight from "@/assets/flight.png";
import piazza from "@/assets/piazza.png";
import pic from "@/assets/frame.png";

const Jobs = ({ onLinkClick }: { onLinkClick(): any }) => {
  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("#FFF3E4", "black");

  const handleChange = (): any => {
    onLinkClick();
  };

  return (
    <Box bg={bgColor}>
      <Container maxW={{ base: "95%", xl: "7xl" }} id='works'>
        <VStack align='flex-start' py='80px' w='full' spacing={{ base: "20px", xl: "50px" }}>
          <Text fontSize='16px' fontWeight='bold' color='#8491A0'>
            My Works
          </Text>

          <Text
            fontSize={{ base: "25px", xl: "48px" }}
            color={textColor}
            fontWeight='bold'
            lineHeight={{ base: "25px", xl: "42px" }}
          >
            Check out some of <br /> my recent works
          </Text>

          <Box borderRadius='20px' h={{ base: "190px", xl: "600px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' backgroundImage={pic}>
              <Box
                className='overlay'
                pt={{ base: "64px", xl: "350px" }}
                pl={{ base: "20px", xl: "60px" }}
              >
                <Text
                  fontSize={{ base: "24px", xl: "32px" }}
                  fontWeight='bold'
                  lineHeight={{ base: "28px", xl: "30px" }}
                  color='#ffffff'
                >
                  T-Connect
                </Text>

                <Box pt={{ base: "0px", xl: "5px" }}>
                  <Text
                    fontSize={{ base: "14px", xl: "18px" }}
                    as='em'
                    lineHeight={{ base: "10px", xl: "30px" }}
                    color='#ffffff'
                  >
                    Leading NFT rent and lease Marketplace
                  </Text>
                </Box>

                <Link href='/t-connect' onClick={handleChange}>
                  <Button
                    mt={{ base: "12px", xl: "25px" }}
                    h='45px'
                    px={{ base: "15px", xl: "45px" }}
                    _hover={{ bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)" }}
                    _active={{
                      transform: "scale(0.98)",
                      transition: "0.3s ease all",
                    }}
                    borderRadius={{ base: "15px", xl: "10px" }}
                  >
                    View More
                  </Button>
                </Link>
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
                    pt={{ base: "32px", xl: "350px" }}
                    pl={{ base: "20px", xl: "60px" }}
                  >
                    <Text
                      fontSize={{ base: "24px", xl: "32px" }}
                      fontWeight='bold'
                      lineHeight={{ base: "28px", xl: "30px" }}
                      color='#ffffff'
                    >
                      Bull-Dog Billonaires
                    </Text>

                    <Box pt={{ base: "0px", xl: "5px" }}>
                      <Text
                        fontSize={{ base: "14px", xl: "18px" }}
                        as='em'
                        lineHeight={{ base: "10px", xl: "30px" }}
                        color='#ffffff'
                      >
                        NFT Platform Monitoring System
                      </Text>
                    </Box>

                    <Link href='/bulldog-billonaires' onClick={handleChange}>
                      <Button
                        mt={{ base: "12px", xl: "25px" }}
                        h='45px'
                        px={{ base: "15px", xl: "45px" }}
                        _hover={{ bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)" }}
                        _active={{
                          transform: "scale(0.98)",
                          transition: "0.3s ease all",
                        }}
                        borderRadius={{ base: "15px", xl: "10px" }}
                      >
                        View More
                      </Button>
                    </Link>
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
                <Box className='card' borderRadius='20px' h='full' w='full' bgImg={flight}>
                  <Box
                    className='overlay'
                    pt={{ base: "59px", xl: "350px" }}
                    pl={{ base: "20px", xl: "60px" }}
                  >
                    <Text
                      fontSize={{ base: "24px", xl: "32px" }}
                      fontWeight='bold'
                      lineHeight={{ base: "28px", xl: "30px" }}
                      color='#ffffff'
                    >
                      Flyair
                    </Text>

                    <Box pt={{ base: "0px", xl: "5px" }}>
                      <Text
                        fontSize={{ base: "14px", xl: "18px" }}
                        as='em'
                        lineHeight={{ base: "10px", xl: "30px" }}
                        color='#ffffff'
                      >
                        Flight booking platform
                      </Text>
                    </Box>

                    <Link href='/fly-air' onClick={handleChange}>
                      <Button
                        mt={{ base: "12px", xl: "25px" }}
                        h='45px'
                        px={{ base: "15px", xl: "45px" }}
                        _hover={{ bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)" }}
                        _active={{
                          transform: "scale(0.98)",
                          transition: "0.3s ease all",
                        }}
                        borderRadius={{ base: "15px", xl: "10px" }}
                      >
                        View More
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>

          <Box borderRadius='20px' h={{ base: "190px", xl: "600px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' bgImg={piazza}>
              <Box
                className='overlay'
                pt={{ base: "64px", xl: "350px" }}
                pl={{ base: "20px", xl: "60px" }}
              >
                <Text
                  fontSize={{ base: "24px", xl: "32px" }}
                  fontWeight='bold'
                  lineHeight={{ base: "28px", xl: "30px" }}
                  color='#ffffff'
                >
                  Stylist Piazza
                </Text>

                <Box pt={{ base: "0px", xl: "5px" }}>
                  <Text
                    fontSize={{ base: "14px", xl: "18px" }}
                    as='em'
                    lineHeight={{ base: "10px", xl: "30px" }}
                    color='#ffffff'
                  >
                    Beauty & Lifestyle
                  </Text>
                </Box>

                <Link href='/stylist-piazza' onClick={handleChange}>
                  <Button
                    mt={{ base: "12px", xl: "25px" }}
                    h='45px'
                    px={{ base: "15px", xl: "45px" }}
                    _hover={{ bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)" }}
                    _active={{
                      transform: "scale(0.98)",
                      transition: "0.3s ease all",
                    }}
                    borderRadius={{ base: "15px", xl: "10px" }}
                  >
                    View More
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>

          <HStack w='full' justify='flex-end'>
            <Box
              w={{ base: "170px", xl: "258px" }}
              h='62px'
              borderLeftWidth='2px'
              borderBottomWidth='2px'
              borderRadius='8px'
              pl='6px'
              borderColor='#BA42C0'
              _hover={{
                transform: "scale(1.02)",
                transition: "0.3s ease all",
              }}
              _active={{
                bgColor: "#5221E6",
                transform: "scale(0.98)",
                transition: "0.3s ease all",
              }}
            >
              <Box mt='-5px'>
                <Link href='/works' onClick={handleChange}>
                  <Button
                    fontSize={{ base: "15px", xl: "18px" }}
                    fontWeight='bold'
                    borderWidth='1px'
                    h='58px'
                    w={{ base: "170px", xl: "250px" }}
                    borderRadius='5px'
                    borderColor='#5221E6'
                    color={textColor}
                    // bg='none'
                    bg='linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)'
                    _active={{
                      bgColor: "#5221E6",
                      transform: "scale(0.98)",
                      transition: "0.3s ease all",
                    }}
                    _hover={{ bgColor: "#5221E6", color: "white" }}
                  >
                    VIEW ALL PROJECTS
                  </Button>
                </Link>
              </Box>
            </Box>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Jobs;
