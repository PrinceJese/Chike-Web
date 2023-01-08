import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import logo from "@/assets/logo.svg";
import Linkstack from "./linkstack";
import { Link } from "react-router-dom";

const Navbar = ({ onLinkClick, onHomeClick }: { onLinkClick(): any; onHomeClick(): any }) => {
  const handleChange = (): any => {
    onLinkClick();
  };

  const handleHomeClick = (): any => {
    onHomeClick();
  };

  return (
    <Box bg='#000000' p={0}>
      <Container maxW='8xl' py={{ base: "15px", xl: "20px" }}>
        <HStack w='full' justify='space-between'>
          <HStack w={{ base: "initial", xl: "50%" }}>
            <Link onClick={handleHomeClick} to='/'>
              <HStack>
                <Image src={logo} w={{ base: "23px", xl: "initial" }} />

                <Text color='white' fontWeight='bold' fontSize='18px'>
                  Ahamefula Ayomide
                </Text>
              </HStack>
            </Link>
          </HStack>

          <HStack
            w='50%'
            color='rgba(255, 255, 255, 0.85);'
            justify='space-between'
            pl='100px'
            display={{ base: "none", xl: "flex" }}
            fontSize='16px'
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
            ></Box>
          </HStack>

          <Linkstack onLinkClick={onLinkClick} onHomeClick={onHomeClick} />
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
