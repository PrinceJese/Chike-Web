import {
  Box,
  Container,
  HStack,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logodark.svg";
import Linkstack from "./linkstack";
import { Link } from "react-router-dom";

const Navbar = ({ onLinkClick, onHomeClick }: { onLinkClick(): any; onHomeClick(): any }) => {
  const { toggleColorMode, colorMode } = useColorMode();

  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("#FFF3E4", "#000000");

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
            <Link onClick={handleHomeClick} to='/'>
              <HStack>
                <Image
                  src={colorMode === "light" ? logoDark : logo}
                  w={{ base: "23px", xl: "initial" }}
                />

                <Text color={textColor} fontWeight='bold' fontSize='18px'>
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
            fontSize='15px'
          >
            <Link id='navlink' to='/about' onClick={handleChange}>
              About
            </Link>

            <Link id='navlink' to='/process' onClick={handleChange}>
              Design Process
            </Link>

            <Link id='navlink' to='/works' onClick={handleChange}>
              Works
            </Link>

            <Link id='navlink' to='#reach' onClick={handleChange}>
              Contact
            </Link>

            <Box
              w='23px'
              h='23px'
              border='2px'
              borderColor='peach'
              borderRadius='50%'
              bg='linear-gradient(90deg, white 50%, black 50%)'
              onClick={toggleColorMode}
            ></Box>
          </HStack>

          <Linkstack onLinkClick={onLinkClick} onHomeClick={onHomeClick} />
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
