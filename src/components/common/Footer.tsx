import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  HStack,
  VStack,
  useColorMode,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logodark.svg";
import linkedin2 from "@/assets/linkedin2.svg";
import twitter2 from "@/assets/twitter2.svg";
import dribble2 from "@/assets/dribble2.svg";
import behance2 from "@/assets/behance2.svg";
import insta2 from "@/assets/insta2.svg";
import call from "@/assets/call.svg";
import mail from "@/assets/mail.svg";
import arrow2 from "@/assets/arrow2.svg";
import { useLocation } from "react-router-dom";

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
  const router = useLocation();
  const { colorMode } = useColorMode();

  const textColor = useColorModeValue("black", "white");
  const textColor2 = useColorModeValue("rgba(0, 0, 0, 0.75)", "rgba(255, 255, 255, 0.75)");

  return (
    <Box bg={useColorModeValue("#CACDD0", router.pathname.length === 1 ? "black" : "#181823")}>
      <Container maxW='8xl'>
        <Flex
          w='full'
          py='50px'
          direction={{ base: "column", xl: "row" }}
          gap={{ base: "50px", xl: "0px" }}
        >
          <VStack w={{ base: "full", xl: "50%" }} align='flex-start' spacing='20px'>
            <HStack
              color={textColor}
              fontWeight='bold'
              fontSize='18px'
              _hover={{ textDecoration: "none" }}
            >
              <Image src={colorMode === "light" ? logoDark : logo} />
              <Link href='/' id='footlink' onClick={handleHomeClick}>
                Ahamefula Ayomide
              </Link>
            </HStack>

            <Text fontSize='18px' w={{ base: "full", xl: "400px" }} color={textColor2}>
              I help brands and businesses grow and achieve their goals by designing functional and
              user centric digital products.
            </Text>

            <HStack
              w={{ base: "full", xl: "350px" }}
              fontSize={{ base: "16px", xl: "17px" }}
              justify='space-between'
            >
              <HStack
                className='hov'
                _hover={{
                  transform: "translateX(15px)",
                  transition: "0.8s ease all",
                  cursor: "pointer",
                }}
              >
                <Image src={arrow2} w='30px' />
                <Text color={useColorModeValue("blue", "green")}>Drop me a line</Text>
              </HStack>

              <Box color={textColor2} fontWeight='500'>
                Let's get started
              </Box>
            </HStack>

            <HStack pt='70px' px='20px' w={{ base: "full", xl: "300px" }} justify='space-between'>
              <Link
                isExternal
                href='https://www.linkedin.com/in/princejese/'
                _active={{
                  transform: "scale(0.98)",
                  transition: "0.3s ease all",
                }}
              >
                <Image src={linkedin2} w={{ base: "25", xl: "25px" }} />
              </Link>

              <Link
                isExternal
                href='https://twitter.com/Prince_Jese'
                _active={{
                  transform: "scale(0.98)",
                  transition: "0.3s ease all",
                }}
              >
                <Image src={twitter2} w={{ base: "25", xl: "25px" }} />
              </Link>

              <Link
                isExternal
                href='https://www.dribbble.com/Prince_Jese'
                _active={{
                  transform: "scale(0.98)",
                  transition: "0.3s ease all",
                }}
              >
                <Image src={dribble2} w={{ base: "25", xl: "25px" }} />
              </Link>

              <Link
                isExternal
                href='https://www.behance.net/ayomideahamefu'
                _active={{
                  transform: "scale(0.98)",
                  transition: "0.3s ease all",
                }}
              >
                <Image src={behance2} w={{ base: "25", xl: "25px" }} />
              </Link>

              <Link
                isExternal
                href='https://www.instagram.com/prince_jese/'
                _active={{
                  transform: "scale(0.98)",
                  transition: "0.3s ease all",
                }}
              >
                <Image src={insta2} w={{ base: "25", xl: "25px" }} />
              </Link>
            </HStack>
          </VStack>

          <Flex
            direction={{ base: "column", xl: "row" }}
            gap={{ base: "50px", xl: "0px" }}
            w={{ base: "full", xl: "50%" }}
            align='flex-start'
          >
            <VStack
              w={{ base: "full", xl: "50%" }}
              align='flex-start'
              color={textColor}
              fontSize='20px'
              spacing='20px'
              fontWeight='500'
            >
              <Link id='footlink' href='/' onClick={handleHomeClick}>
                Home
              </Link>

              <Link id='footlink' href='/about' onClick={handleChange}>
                About
              </Link>

              <Link id='footlink' href='/process' onClick={handleChange}>
                Design Process
              </Link>

              <Link id='footlink' href='/works' onClick={handleChange}>
                Works
              </Link>

              <Link id='footlink' href='/contact' onClick={handleChange}>
                Contact
              </Link>
            </VStack>

            <VStack
              w={{ base: "full", xl: "50%" }}
              h='full'
              align='flex-start'
              justify='space-between'
            >
              <VStack h='full' align='flex-start' spacing='20px' color={textColor}>
                <HStack>
                  <Image src={mail} />
                  <Text fontSize='18px'>ahamefulaayomide@gmail.com</Text>
                </HStack>

                <HStack>
                  <Image src={call} />
                  <Text fontSize='18px'>+234 708 430 9966</Text>
                </HStack>
              </VStack>

              <VStack align='flex-start' pt='20px' color={textColor2}>
                <Text as='span' fontSize='14px'>
                  Developed by{" "}
                  <Text as='span' color={textColor} fontWeight='bold'>
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
