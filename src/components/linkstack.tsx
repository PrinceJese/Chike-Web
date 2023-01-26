import {
  HStack,
  Image,
  VStack,
  Text,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import menu from "@/assets/menu.svg";
import linkedin2 from "@/assets/linkedin2.svg";
import twitter2 from "@/assets/twitter2.svg";
import dribble2 from "@/assets/dribble2.svg";
import behance2 from "@/assets/behance2.svg";
import insta2 from "@/assets/insta2.svg";
import { useRef } from "react";

const Linkstack = ({ onLinkClick, onHomeClick }: { onLinkClick(): any; onHomeClick(): any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const handleChange = (): any => {
    onLinkClick();
  };

  const handleHomeClick = (): any => {
    onHomeClick();
  };

  return (
    <HStack display={{ base: "flex", xl: "none" }}>
      <Image ref={btnRef} onClick={onOpen} src={menu} />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent bg='black'>
          <DrawerCloseButton mt='10px' w='30px' border='0px' bg='none' color='white' />
          <DrawerHeader>
            <Box onClick={onClose}>
              <Link to='/' onClick={handleHomeClick}>
                <HStack>
                  <Image src={logo} w='20px' />
                  <Text color='white' fontSize='18px' fontWeight='bold'>
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
                spacing='30px'
                align='flex-start'
                color='rgba(255, 255, 255, 0.85)'
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
