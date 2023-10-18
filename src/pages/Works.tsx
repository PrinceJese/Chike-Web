import {
  Box,
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import bull1 from "@/assets/bull1.png";
import piaza1 from "@/assets/piaza1.png";
import tcon1 from "@/assets/tcon1.png";
import bear1 from "@/assets/bearr.png";
import flight1 from "@/assets/flight1.png";
import lfg1 from "@/assets/lfg1.png";
// import { Link } from "react-router-dom";

const Works = () => {
  const textColor = useColorModeValue("black", "white");

  return (
    <Container maxW='7xl'>
      <VStack align='flex-start' color={textColor} py='50px'>
        <Text fontSize={{ base: "25px", xl: "48px" }} fontWeight='bold'>
          Projects I have worked on
        </Text>

        <SimpleGrid pt='20px' pb='50px' w='full' columns={{ base: 1, xl: 2 }} spacing='30px'>
          <Box borderRadius='20px' h={{ base: "210px", xl: "374px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' bgImg={tcon1}>
              <Box className='overlay'></Box>

              <VStack
                pt={{ base: "65px", xl: "190px" }}
                className='overlay2'
                pl={{ base: "20px", xl: "40px" }}
                align='flex-start'
                spacing='0px'
              >
                <Text color='white' fontSize='30px' fontWeight='700'>
                  T-Connect
                </Text>
                <Text color='white' fontSize='18px' as='em'>
                  NFT rent and lease Marketplace
                </Text>
                <Link href='/t-connect'>
                  <Button
                    mt={{ base: "10px", xl: "10px" }}
                    h='45px'
                    borderRadius='15px'
                    fontSize='15px'
                    px={{ base: "15px", xl: "25px" }}
                    _hover={{
                      color: "white",
                      bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
                    }}
                    // colorScheme='teal'
                    opacity='0.9'
                    _active={{
                      transform: "scale(0.98)",
                      transition: "0.3s ease all",
                    }}
                  >
                    View more
                  </Button>
                </Link>
              </VStack>
            </Box>
          </Box>

          <Box borderRadius='20px' h={{ base: "210px", xl: "374px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' bgImg={piaza1}>
              <Box className='overlay'></Box>

              <VStack
                pt={{ base: "65px", xl: "190px" }}
                className='overlay2'
                pl={{ base: "20px", xl: "40px" }}
                align='flex-start'
                spacing='0px'
              >
                <Text color='white' fontSize='30px' fontWeight='700'>
                  Stylist Piazza
                </Text>
                <Text color='white' fontSize='18px' as='em'>
                  Beauty and Lifestyle Platform
                </Text>
                <Link href='/stylist-piazza'>
                  <Button
                    mt={{ base: "10px", xl: "10px" }}
                    h='45px'
                    borderRadius='15px'
                    fontSize='15px'
                    px={{ base: "15px", xl: "25px" }}
                    _hover={{
                      color: "white",
                      bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
                    }}
                    // colorScheme='teal'
                    opacity='0.9'
                    _active={{
                      transform: "scale(0.98)",
                      transition: "0.3s ease all",
                    }}
                  >
                    View more
                  </Button>
                </Link>
              </VStack>
            </Box>
          </Box>

          <Box borderRadius='20px' h={{ base: "210px", xl: "374px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' bgImg={bull1}>
              <Box className='overlay'></Box>

              <VStack
                pt={{ base: "65px", xl: "190px" }}
                className='overlay2'
                pl={{ base: "20px", xl: "40px" }}
                align='flex-start'
                spacing='0px'
              >
                <Text color='white' fontSize='30px' fontWeight='700'>
                  Bull-Dog Billonaires
                </Text>
                <Text color='white' fontSize='18px' as='em'>
                  NFT Platform Monitoring System
                </Text>
                <Link href='/bulldog-billonaires'>
                  <Button
                    mt={{ base: "10px", xl: "10px" }}
                    h='45px'
                    borderRadius='15px'
                    fontSize='15px'
                    px={{ base: "15px", xl: "25px" }}
                    _hover={{
                      color: "white",
                      bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
                    }}
                    // colorScheme='teal'
                    opacity='0.9'
                    _active={{
                      transform: "scale(0.98)",
                      transition: "0.3s ease all",
                    }}
                  >
                    View more
                  </Button>
                </Link>
              </VStack>
            </Box>
          </Box>

          <Box borderRadius='20px' h={{ base: "210px", xl: "374px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' bgImg={flight1}>
              <Box className='overlay'></Box>

              <VStack
                pt={{ base: "65px", xl: "190px" }}
                className='overlay2'
                pl={{ base: "20px", xl: "40px" }}
                align='flex-start'
                spacing='0px'
              >
                <Text color='white' fontSize='30px' fontWeight='700'>
                  Fly Air
                </Text>
                <Text color='white' fontSize='18px' as='em'>
                  Flight Booking Platform
                </Text>
                <Link href='/fly-air'>
                  <Button
                    mt={{ base: "10px", xl: "10px" }}
                    h='45px'
                    borderRadius='15px'
                    fontSize='15px'
                    px={{ base: "15px", xl: "25px" }}
                    _hover={{
                      color: "white",
                      bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
                    }}
                    // colorScheme='teal'
                    opacity='0.9'
                    _active={{
                      transform: "scale(0.98)",
                      transition: "0.3s ease all",
                    }}
                  >
                    View more
                  </Button>
                </Link>
              </VStack>
            </Box>
          </Box>

          <Box borderRadius='20px' h={{ base: "210px", xl: "374px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' bgImg={bear1}>
              <Box className='overlay'></Box>

              <VStack
                pt={{ base: "65px", xl: "190px" }}
                className='overlay2'
                pl={{ base: "20px", xl: "40px" }}
                align='flex-start'
                spacing='0px'
              >
                <Text color='white' fontSize='30px' fontWeight='700'>
                  BearVenture
                </Text>
                <Text color='white' fontSize='18px' as='em'>
                  NFT Minting Website
                </Text>
                <Link href='/bear-venture'>
                  <Button
                    mt={{ base: "10px", xl: "10px" }}
                    h='45px'
                    borderRadius='15px'
                    fontSize='15px'
                    px={{ base: "15px", xl: "25px" }}
                    _hover={{
                      color: "white",
                      bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
                    }}
                    // colorScheme='teal'
                    opacity='0.9'
                    _active={{
                      transform: "scale(0.98)",
                      transition: "0.3s ease all",
                    }}
                  >
                    View more
                  </Button>
                </Link>
              </VStack>
            </Box>
          </Box>

          <Box borderRadius='20px' h={{ base: "210px", xl: "374px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' bgImg={lfg1}>
              <Box className='overlay'></Box>

              <VStack
                pt={{ base: "65px", xl: "190px" }}
                className='overlay2'
                pl={{ base: "20px", xl: "40px" }}
                align='flex-start'
                spacing='0px'
              >
                <Text color='white' fontSize='30px' fontWeight='700'>
                  LFG Pass
                </Text>
                <Text color='white' fontSize='18px' as='em'>
                  NFT Minting Website
                </Text>
                <Link href='/lfg-pass'>
                  <Button
                    mt={{ base: "10px", xl: "10px" }}
                    h='45px'
                    borderRadius='15px'
                    fontSize='15px'
                    px={{ base: "15px", xl: "25px" }}
                    _hover={{
                      color: "white",
                      bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
                    }}
                    // colorScheme='teal'
                    opacity='0.9'
                    _active={{
                      transform: "scale(0.98)",
                      transition: "0.3s ease all",
                    }}
                  >
                    View more
                  </Button>
                </Link>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>

        <Box pb='20px'>
          <Text fontSize={{ base: "25px", xl: "48px" }} fontWeight='bold'>
            Wanna get Started?
          </Text>
        </Box>

        <Box
          w='256px'
          h='62px'
          borderLeftWidth='2px'
          borderBottomWidth='2px'
          borderRadius='8px'
          pl='5px'
          borderColor='green'
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
            <Link href='/contact'>
              <Button
                bg='#9d9d9dc0'
                w='250px'
                color='black'
                height='59px'
                borderRadius='5px'
                _hover={{ bgColor: "#9d9d9dc0", opacity: "0.7", transition: "0.3s ease all" }}
                _focus={{ bgColor: "#9d9d9dc0" }}
                _active={{
                  bgColor: "#9d9d6d92",
                  opacity: "0.7",
                  transform: "scale(0.98)",
                  transition: "0.3s ease all",
                }}
                fontSize={{ base: "17px", xl: "18px" }}
              >
                SEND ME AN EMAIL
              </Button>
            </Link>
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Works;
