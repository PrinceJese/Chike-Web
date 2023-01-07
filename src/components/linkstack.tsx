import {
  HStack,
  Image,
  VStack,
  Link,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import linkedin2 from "../assets/linkedin2.svg";
import twitter2 from "../assets/twitter2.svg";
import dribble2 from "../assets/dribble2.svg";
import behance2 from "../assets/behance2.svg";
import insta2 from "../assets/insta2.svg";
import { useRef } from "react";

const Linkstack = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

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
          <DrawerHeader mb='30px'>
            <HStack>
              <Image src={logo} w='20px' />
              <Text color='white' fontWeight='bold'>
                Ahamefula Ayomide
              </Text>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <VStack align='flex-start' h='full' justify='space-between'>
              <VStack spacing='30px' align='flex-start' color='rgba(255, 255, 255, 0.85)'>
                <Link fontSize='18px' href='#about' _hover={{ color: "white" }} onClick={onClose}>
                  About
                </Link>

                <Link fontSize='18px' href='#process' _hover={{ color: "white" }} onClick={onClose}>
                  Design Process
                </Link>

                <Link fontSize='18px' href='#works' _hover={{ color: "white" }} onClick={onClose}>
                  Works
                </Link>

                <Link fontSize='18px' href='#reach' _hover={{ color: "white" }} onClick={onClose}>
                  Contact
                </Link>
              </VStack>

              <HStack pb='50px' w='full' justify='space-around'>
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
