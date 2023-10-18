import {
  HStack,
  Image,
  VStack,
  Text,
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  chakra,
  shouldForwardProp,
  Link,
} from "@chakra-ui/react";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logodark.svg";
import menu from "@/assets/menu.svg";
import menu2 from "@/assets/menuu.svg";
import linkedin2 from "@/assets/linkedin2.svg";
import twitter2 from "@/assets/twitter2.svg";
import dribble2 from "@/assets/dribble2.svg";
import behance2 from "@/assets/behance2.svg";
import insta2 from "@/assets/insta2.svg";
import dayMode from "@/assets/daymode.svg";
import nightMode from "@/assets/nightmode.svg";
import { useRef, useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";

const Linkstack = ({ onLinkClick, onHomeClick }: { onLinkClick(): any; onHomeClick(): any }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const ChakraBox = chakra(motion(Box), {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const { toggleColorMode, colorMode } = useColorMode();
  const bgColor = useColorModeValue("#FFF3E4", "black");
  const textColor = useColorModeValue("black", "white");
  const textColor2 = useColorModeValue("black", "rgba(255, 255, 255, 0.85)");

  const handleChange = (): any => {
    onLinkClick();
  };

  const handleHomeClick = (): any => {
    onHomeClick();
  };

  return (
    <HStack display={{ base: "flex", xl: "none" }}>
      <Image ref={btnRef} onClick={onOpen} src={colorMode === "light" ? menu2 : menu} />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent bg={bgColor}>
          <DrawerCloseButton mt='10px' w='30px' border='0px' bg='none' color={textColor} />
          <DrawerHeader>
            <Box onClick={onClose}>
              <Link href='/' onClick={handleHomeClick} _hover={{ textDecor: "none" }}>
                <HStack>
                  <Image src={colorMode === "light" ? logoDark : logo} w='20px' />
                  <Text color={textColor} fontSize='22px' fontWeight='bold'>
                    Ahamefula Ayomide
                  </Text>
                </HStack>
              </Link>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <VStack align='flex-start' h='full' justify='space-between'>
              <VStack
                fontSize='18px'
                fontWeight='600'
                spacing='20px'
                align='flex-start'
                color={textColor2}
                pt='20px'
              >
                <Box onClick={onClose}>
                  <Link href='/about' id='navlink' onClick={handleChange}>
                    About
                  </Link>
                </Box>

                <Box onClick={onClose}>
                  <Link href='/process' id='navlink' onClick={handleChange}>
                    Design Process
                  </Link>
                </Box>

                <Box onClick={onClose}>
                  <Link href='/works' id='navlink' onClick={handleChange}>
                    Works
                  </Link>
                </Box>

                <Box onClick={onClose}>
                  <Link href='/contact' id='navlink' onClick={handleChange}>
                    Contact
                  </Link>
                </Box>

                <HStack color={useColorModeValue("blue", "white")} spacing='15px'>
                  <Text>{colorMode === "light" ? "Night Mode" : "Day Mode"}</Text>
                  <Image src={colorMode === "light" ? nightMode : dayMode} w='17px' />

                  <Box onClick={toggleColorMode}>
                    <Flex
                      className='switch'
                      w='70px'
                      h='35px'
                      bg='rgba(0, 0, 0, 0.75)'
                      justify='flex-start'
                      align='center'
                      borderRadius='50px'
                      p='3px'
                      data-isOn={isOn}
                      onClick={toggleSwitch}
                    >
                      <ChakraBox
                        className='handle'
                        w='27px'
                        h='27px'
                        bg='white'
                        borderRadius='15px'
                        layout
                        // @ts-ignore
                        transition={spring}
                      />
                    </Flex>
                  </Box>
                </HStack>
              </VStack>

              <HStack w='full' justify='space-around' pb='100px'>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Linkstack;
