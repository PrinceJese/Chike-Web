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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
              <Link to='/' onClick={handleHomeClick}>
                <HStack>
                  <Image src={colorMode === "light" ? logoDark : logo} w='20px' />
                  <Text color={textColor} fontSize='18px' fontWeight='bold'>
                    Ahamefula Ayomide
                  </Text>
                </HStack>
              </Link>
            </Box>
          </DrawerHeader>

          <DrawerBody>
            <VStack align='flex-start' h='full' justify='space-between'>
              <VStack
                fontSize='20px'
                fontWeight='500'
                spacing='30px'
                align='flex-start'
                color={textColor2}
                pt='20px'
              >
                <Box onClick={onClose}>
                  <Link to='/about' id='navlink' onClick={handleChange}>
                    About
                  </Link>
                </Box>

                <Box onClick={onClose}>
                  <Link to='/process' id='navlink' onClick={handleChange}>
                    Design Process
                  </Link>
                </Box>

                <Box onClick={onClose}>
                  <Link to='/works' id='navlink' onClick={handleChange}>
                    Works
                  </Link>
                </Box>

                <Box onClick={onClose}>
                  <Link to='#reach' id='navlink' onClick={handleChange}>
                    Contact
                  </Link>
                </Box>

                <HStack
                  color={useColorModeValue("blue", "white")}
                  spacing='15px'
                  // onClick={toggleColorMode}
                >
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

              <HStack w='full' justify='space-around' pb='80px'>
                <Image src={linkedin2} w='25px' />
                <Image src={twitter2} w='325x' />
                <Image src={dribble2} w='25px' />
                <Image src={behance2} w='25px' />
                <Image src={insta2} w='25px' />
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Linkstack;
