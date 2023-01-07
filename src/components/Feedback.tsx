import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Comments from "./Comments";
import arrow from "../assets/arrow.png";

const Feedback = () => {
  return (
    <Box bg='#FFF3E4' h='100vh'>
      <Container maxW='7xl' h='full'>
        <Flex
          w='full'
          h='full'
          justify='center'
          py={{ xl: "50px", "2xl": "80px" }}
          position={"relative"}
        >
          <VStack w='45%' align='flex-start' spacing='30px'>
            <Text fontSize='40px' fontWeight='bold' lineHeight='40px'>
              Feedback from people <br /> I have worked with
            </Text>

            <Text fontSize='15px'>
              Here are a few lines from clients I have worked with in the past <br /> three years of
              my career.
            </Text>
          </VStack>

          <VStack w='45%' spacing='50px' className='overflow' overflowX='hidden'>
            <Comments />
          </VStack>

          <Image src={arrow} h='60px' position={"absolute"} top='200px' right='30px' />

          <Text
            id='nav'
            position={"absolute"}
            top='220px'
            right='-20px'
            fontSize='10px'
            transform='rotate(90deg)'
          >
            SCROLL DOWN
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Feedback;
