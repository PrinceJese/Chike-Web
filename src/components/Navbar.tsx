import { Box, Container, HStack, Image, Text, Link, Switch } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <Box bg='#000000' p={0}>
      <Container maxW='8xl' py='20px'>
        <HStack w='full'>
          <HStack w='50%'>
            <Image src={logo} />
            <Text color='white' fontWeight='bold'>
              Ahamefula Ayomide
            </Text>
          </HStack>

          <HStack w='50%' color='rgba(255, 255, 255, 0.85);' justify='space-between' pl='100px'>
            <Link fontSize='14px' _hover={{ color: "white" }} href='#about'>
              About
            </Link>

            <Link fontSize='14px' _hover={{ color: "white" }} href='#process'>
              Design Process
            </Link>

            <Link fontSize='14px' _hover={{ color: "white" }} href='#works'>
              Works
            </Link>

            <Link fontSize='14px' _hover={{ color: "white" }} href='#contact'>
              Contact
            </Link>

            <Switch colorScheme='teal' />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
