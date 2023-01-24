import { Box, Container, Flex, Text, Image, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import linkedin2 from "@/assets/linkedin2.svg";
import twitter2 from "@/assets/twitter2.svg";
import dribble2 from "@/assets/dribble2.svg";
import behance2 from "@/assets/behance2.svg";
import insta2 from "@/assets/insta2.svg";
import call from "@/assets/call.svg";
import mail from "@/assets/mail.svg";
import arrow2 from "@/assets/arrow2.svg";

const Footer = ({
  footerColour,
  onLinkClick,
  onHomeClick,
}: {
  footerColour: string;
  onLinkClick(): any;
  onHomeClick(): any;
}) => {
  const handleChange = (): any => {
    onLinkClick();
  };

  const handleHomeClick = (): any => {
    onHomeClick();
  };

  return (
    <Box bg={footerColour}>
      <Container maxW='8xl'>
        <Flex
          w='full'
          py='50px'
          direction={{ base: "column", xl: "row" }}
          gap={{ base: "50px", xl: "0px" }}
        >
          <VStack w={{ base: "full", xl: "50%" }} align='flex-start' spacing='20px'>
            <HStack
              color='white'
              fontWeight='bold'
              fontSize='18px'
              _hover={{ textDecoration: "none" }}
            >
              <Image src={logo} />
              <Link to='/' onClick={handleHomeClick}>
                Ahamefula Ayomide
              </Link>
            </HStack>

            <Text
              fontSize='17px'
              w={{ base: "full", xl: "350px" }}
              color='rgba(255, 255, 255, 0.75)'
            >
              I help brands and businesses grow and achieve their goals by designing functional and
              user centric digital products.
            </Text>

            <HStack w={{ base: "full", xl: "350px" }} justify='space-between'>
              <HStack
                fontSize='16px'
                className='hov'
                _hover={{
                  transform: "translateX(50px)",
                  transition: "0.3s ease all",
                  cursor: "pointer",
                }}
              >
                <Image src={arrow2} w='30px' />
                <Text color='green'>Drop me a like</Text>
              </HStack>

              <Box color='rgba(255, 255, 255, 0.75)'>
                <Link id='footlink' to='/'>
                  Let's get started
                </Link>
              </Box>
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
              <Link id='footlink' to='/' onClick={handleHomeClick}>
                Home
              </Link>

              <Link id='footlink' to='/about' onClick={handleChange}>
                About
              </Link>

              <Link id='footlink' to='/process' onClick={handleChange}>
                Design Process
              </Link>

              <Link id='footlink' to='/works' onClick={handleChange}>
                Works
              </Link>

              <Link id='footlink' to='#reach' onClick={handleChange}>
                Contact
              </Link>
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
                  <Text fontSize='16px' color='white'>
                    ahamefulaayomide@gmail.com
                  </Text>
                </HStack>

                <HStack>
                  <Image src={call} />
                  <Text fontSize='16px' color='white'>
                    +234 708 430 9966
                  </Text>
                </HStack>
              </VStack>

              <VStack align='flex-start' pt='20px'>
                <Text as='span' fontSize='13px' color='rgba(255, 255, 255, 0.75)'>
                  Designed by{" "}
                  <Text as='span' color='white' fontWeight='bold'>
                    Ahamefula Ayomide{" "}
                  </Text>
                  &copy; 2023
                </Text>

                <Text as='span' fontSize='13px' color='rgba(255, 255, 255, 0.75)'>
                  Brought to life by{" "}
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
