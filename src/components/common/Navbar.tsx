import {
  Box,
  Container,
  HStack,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logodark.svg";
import Linkstack from "./linkstack";
import { useLocation } from "react-router-dom";
import darkIcon from "@/assets/dark.svg";
import lightIcon from "@/assets/light.svg";

const Navbar = ({ onLinkClick, onHomeClick }: { onLinkClick(): any; onHomeClick(): any }) => {
  const { toggleColorMode, colorMode } = useColorMode();

  const router = useLocation();

  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("#FFF3E4", "#000000");
  const toggleColor = useColorModeValue(
    "linear-gradient(90deg, white 50%, black 50%)",
    "linear-gradient(90deg, black 50%, white 50%)"
  );

  const handleChange = (): any => {
    onLinkClick();
  };

  const handleHomeClick = (): any => {
    onHomeClick();
  };

  return (
    <Box bgColor={bgColor} p={0}>
      <Container maxW='8xl' py={{ base: "18px", xl: "30px" }}>
        <HStack w='full' justify='space-between'>
          <HStack w={{ base: "initial", xl: "50%" }}>
            <Link onClick={handleHomeClick} href='/' _hover={{ textDecor: "none" }}>
              <HStack>
                <Image
                  src={colorMode === "light" ? logoDark : logo}
                  w={{ base: "23px", xl: "initial" }}
                />

                <Text color={textColor} fontWeight='bold' fontSize='20px'>
                  Ahamefula Ayomide
                </Text>
              </HStack>
            </Link>
          </HStack>

          <HStack
            w='50%'
            color={useColorModeValue("black", "rgba(255, 255, 255, 0.85);")}
            justify='space-between'
            pl='100px'
            display={{ base: "none", xl: "flex" }}
            fontSize='16px'
            fontWeight='500'
          >
            <Link
              id='navlink'
              href='/about'
              onClick={handleChange}
              borderRadius={router.pathname.includes("about") ? "3px" : ""}
              borderBottom={router.pathname.includes("about") ? "1.5px solid #5221e6" : ""}
              // borderColor={router.pathname.includes("about") ? "" : ""}
            >
              About
            </Link>

            <Link
              id='navlink'
              href='/process'
              onClick={handleChange}
              borderRadius={router.pathname.includes("process") ? "3px" : ""}
              borderBottom={router.pathname.includes("process") ? "1.5px solid #5221e6" : ""}
            >
              Design Process
            </Link>

            <Link
              id='navlink'
              href='/works'
              onClick={handleChange}
              borderRadius={router.pathname.includes("works") ? "3px" : ""}
              borderBottom={router.pathname.includes("works") ? "1.5px solid #5221e6" : ""}
            >
              Works
            </Link>

            <Link
              id='navlink'
              href='/contact'
              onClick={handleChange}
              borderRadius={router.pathname.includes("contact") ? "3px" : ""}
              borderBottom={router.pathname.includes("contact") ? "1.5px solid #5221e6" : ""}
            >
              Contact
            </Link>

            <Box _hover={{ transform: "scale(0.94)", transition: "0.5s ease-in-out" }}>
              <Image
                src={colorMode === "light" ? darkIcon : lightIcon}
                onClick={toggleColorMode}
                cursor='pointer'
              />
            </Box>
          </HStack>

          <Linkstack onLinkClick={onLinkClick} onHomeClick={onHomeClick} />
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
