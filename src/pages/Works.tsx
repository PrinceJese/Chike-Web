import {
  Box,
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import bull1 from "@/assets/bull1.png";
import piaza1 from "@/assets/piaza1.png";
import tcon1 from "@/assets/tcon1.png";
import bear1 from "@/assets/bearr.png";
import flight1 from "@/assets/flight1.png";
import lfg1 from "@/assets/lfg1.png";
import { Link } from "react-router-dom";

const Works = () => {
  const textColor = useColorModeValue("black", "white");

  return (
    <Container maxW='7xl'>
      <VStack align='flex-start' color={textColor} py='50px'>
        <Text fontSize={{ base: "25px", xl: "25px" }} fontWeight='bold'>
          Projects I have worked on
        </Text>

        <SimpleGrid pt='20px' pb='50px' w='full' columns={{ base: 1, xl: 2 }} spacing='30px'>
          <Link to='/t-connect'>
            <Box className='card'>
              <Image src={tcon1} borderRadius='20px' />
            </Box>
          </Link>

          <Link to='/piaza'>
            <Box className='card'>
              <Image src={piaza1} borderRadius='20px' />
            </Box>
          </Link>

          <Link to='/bulldog-billonaires'>
            <Box className='card'>
              <Image src={bull1} borderRadius='20px' />
            </Box>
          </Link>

          <Link to='/fly-air'>
            <Box className='card'>
              <Image src={flight1} borderRadius='20px' />
            </Box>
          </Link>

          <Link to='/bear-venture'>
            <Box className='card'>
              <Image src={bear1} borderRadius='20px' />
            </Box>
          </Link>

          <Link to='/lfg-pass'>
            <Box className='card'>
              <Image src={lfg1} borderRadius='20px' />
            </Box>
          </Link>
        </SimpleGrid>

        <Box pb='20px'>
          <Text fontSize={{ base: "25px", xl: "25px" }} fontWeight='bold'>
            Wanna get Started?
          </Text>
        </Box>

        <Box pb='50px'>
          <Button
            bg='#9d9d9dc0'
            w='250px'
            borderRadius='2px'
            _active={{ bgColor: "#9d9d9d92" }}
            _hover={{ bgColor: "#9d9d9d92" }}
            fontSize={{ base: "17px", xl: "14px" }}
          >
            SEND ME AN EMAIL
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Works;
