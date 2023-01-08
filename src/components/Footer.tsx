import { Box, Container, Flex, Text, Image, HStack, Link, VStack } from "@chakra-ui/react";
import logo from "@/assets/logo.svg";
import linkedin2 from "@/assets/linkedin2.svg";
import twitter2 from "@/assets/twitter2.svg";
import dribble2 from "@/assets/dribble2.svg";
import behance2 from "@/assets/behance2.svg";
import insta2 from "@/assets/insta2.svg";
import call from "@/assets/call.svg";
import mail from "@/assets/mail.svg";
import arrow2 from "@/assets/arrow2.svg";

const Footer = () => {
  return (
    <Box>
      <Container maxW='8xl'>
        <Flex
          w='full'
          py='50px'
          direction={{ base: "column", xl: "row" }}
          gap={{ base: "50px", xl: "0px" }}
        >
          <VStack w={{ base: "full", xl: "50%" }} align='flex-start' spacing='20px'>
            <HStack>
              <Image src={logo} />
              <Text color='white' fontWeight='bold'>
                Ahamefula Ayomide
              </Text>
            </HStack>

            <Text
              fontSize='16px'
              w={{ base: "full", xl: "350px" }}
              color='rgba(255, 255, 255, 0.75)'
            >
              I help brands and businesses grow and achieve their goals by designing functional and
              user centric digital products.
            </Text>

            <HStack w={{ base: "full", xl: "350px" }} justify='space-between'>
              <HStack>
                <Image src={arrow2} />
                <Text fontSize='15px' color='green'>
                  Drop me a like
                </Text>
              </HStack>

              <Link fontSize='15px' color='rgba(255, 255, 255, 0.75)' _hover={{ color: "green" }}>
                Let's get started
              </Link>
            </HStack>

            <HStack pt='70px' px='20px' w={{ base: "full", xl: "300px" }} justify='space-between'>
              <Image src={linkedin2} w={{ base: "25", xl: "22px" }} />
              <Image src={twitter2} w={{ base: "25", xl: "22px" }} />
              <Image src={dribble2} w={{ base: "25", xl: "22px" }} />
              <Image src={behance2} w={{ base: "25", xl: "22px" }} />
              <Image src={insta2} w={{ base: "25", xl: "22px" }} />
            </HStack>
          </VStack>

          <Flex
            direction={{ base: "column", xl: "row" }}
            gap={{ base: "50px", xl: "0px" }}
            w={{ base: "full", xl: "50%" }}
            align='flex-start'
          >
            <VStack w={{ base: "full", xl: "50%" }} align='flex-start' color='white' spacing='20px'>
              <Link _hover={{ color: "green" }}>Home</Link>

              <Link _hover={{ color: "green" }}>About</Link>

              <Link _hover={{ color: "green" }}>Design Process</Link>

              <Link _hover={{ color: "green" }}>Works</Link>

              <Link _hover={{ color: "green" }}>Contact</Link>
            </VStack>

            <VStack
              w={{ base: "full", xl: "50%" }}
              h='full'
              align='flex-start'
              justify='space-between'
            >
              <VStack h='full' align='flex-start' spacing='20px' color='white'>
                <HStack>
                  <Image src={mail} />
                  <Text fontSize='14px' color='white'>
                    ahamefulaayomide@gmail.com
                  </Text>
                </HStack>

                <HStack>
                  <Image src={call} />
                  <Text fontSize='14px' color='white'>
                    +234 708 430 9966
                  </Text>
                </HStack>
              </VStack>

              <VStack align='flex-start'>
                <Text as='span' fontSize='12px' color='rgba(255, 255, 255, 0.75)'>
                  Designed by{" "}
                  <Text as='span' color='white' fontWeight='bold'>
                    Ahamefula Ayomide{" "}
                  </Text>
                  &copy; 2023
                </Text>

                <Text as='span' fontSize='12px' color='rgba(255, 255, 255, 0.75)'>
                  Coded by{" "}
                  <Text as='span' color='white' fontWeight='bold'>
                    Seye Alexander{" "}
                  </Text>
                  &copy; 2023
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
