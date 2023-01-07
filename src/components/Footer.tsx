import { Box, Container, Flex, Text, Image, HStack, Link, VStack } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import dribble from "../assets/dribble.svg";
import behance from "../assets/behance.svg";
import insta from "../assets/insta.svg";
import call from "../assets/call.svg";
import mail from "../assets/mail.svg";
import arrow2 from "../assets/arrow2.svg";

const Footer = () => {
  return (
    <Box>
      <Container maxW='8xl'>
        <Flex w='full' py='50px'>
          <VStack w='50%' align='flex-start' spacing='20px'>
            <HStack>
              <Image src={logo} />
              <Text color='white' fontWeight='bold'>
                Ahamefula Ayomide
              </Text>
            </HStack>

            <Text fontSize='16px' w='350px' color='rgba(255, 255, 255, 0.75)'>
              I help brands and businesses grow and achieve their goals by designing functional and
              user centric digital products.
            </Text>

            <HStack w='350px' justify='space-between'>
              <HStack>
                <Image src={arrow2} />
                <Text fontSize='15px' color='green'>
                  Drop me a line
                </Text>
              </HStack>

              <Link fontSize='15px' color='rgba(255, 255, 255, 0.75)' _hover={{ color: "green" }}>
                Let's get started
              </Link>
            </HStack>

            <HStack pt='70px' w='300px' justify='space-between'>
              <Image src={linkedin} w='22px' />
              <Image src={twitter} w='22px' />
              <Image src={dribble} w='22px' />
              <Image src={behance} w='22px' />
              <Image src={insta} w='22px' />
            </HStack>
          </VStack>

          <HStack w='50%' align='flex-start'>
            <VStack w='50%' align='flex-start' color='white' spacing='20px'>
              <Link _hover={{ color: "green" }}>Home</Link>

              <Link _hover={{ color: "green" }}>About</Link>

              <Link _hover={{ color: "green" }}>Design Process</Link>

              <Link _hover={{ color: "green" }}>Works</Link>

              <Link _hover={{ color: "green" }}>Contact</Link>
            </VStack>

            <VStack w='50%' h='full' align='flex-start' justify='space-between'>
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

              <HStack>
                <Text as='span' fontSize='12px' color='rgba(255, 255, 255, 0.75)'>
                  Made by{" "}
                  <Text as='span' color='white' fontWeight='bold'>
                    Ahamefula Ayomide{" "}
                  </Text>
                  &copy; 2023
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
