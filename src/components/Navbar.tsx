import { Box, Container, HStack, Image, Text, Link, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import Linkstack from "./linkstack";

const Navbar = () => {
  return (
    <Box bg='#000000' p={0}>
      <Container maxW='8xl' py={{ base: "15px", xl: "20px" }}>
        <HStack w='full' justify='space-between'>
          <HStack w={{ base: "initial", xl: "50%" }}>
            <Image src={logo} w={{ base: "20px", xl: "initial" }} />
            <Text color='white' fontWeight='bold'>
              Ahamefula Ayomide
            </Text>
          </HStack>

          <HStack
            w='50%'
            color='rgba(255, 255, 255, 0.85);'
            justify='space-between'
            pl='100px'
            display={{ base: "none", xl: "flex" }}
          >
            <Link fontSize='14px' _hover={{ color: "white" }} href='#about'>
              About
            </Link>

            <Link fontSize='14px' _hover={{ color: "white" }} href='#process'>
              Design Process
            </Link>

            <Link fontSize='14px' _hover={{ color: "white" }} href='#works'>
              Works
            </Link>

            <Link fontSize='14px' _hover={{ color: "white" }} href='#reach'>
              Contact
            </Link>

            <Switch colorScheme='teal' />
          </HStack>

          <Linkstack />
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
