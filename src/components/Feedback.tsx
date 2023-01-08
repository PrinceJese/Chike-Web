import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Comments from "./Comments";
import arrow from "@/assets/arrow.png";

const Feedback = () => {
  return (
    <Box bg='#FFF3E4' h='100vh'>
      <Container maxW={{ base: "95%", xl: "7xl" }} h='full'>
        <Flex
          w='full'
          h='full'
          justify='center'
          py={{ base: "50px", "2xl": "80px" }}
          position={"relative"}
          direction={{ base: "column", xl: "row" }}
        >
          <VStack w={{ base: "full", xl: "45%" }} align='flex-start' spacing='30px'>
            <Text
              fontSize='40px'
              fontWeight='bold'
              lineHeight='40px'
              display={{ base: "none", xl: "block" }}
            >
              Feedback from people <br /> I have worked with
            </Text>

            <Text
              fontSize='35px'
              fontWeight='bold'
              lineHeight='35px'
              display={{ base: "block", xl: "none" }}
            >
              Feedback from people I have worked with
            </Text>

            <Text
              fontSize={{ base: "18px", "2xl": "22px" }}
              display={{ base: "none", xl: "block" }}
            >
              Here are a few lines from clients I have worked within the past <br /> three years of
              my career.
            </Text>

            <Text fontSize='18px' display={{ base: "block", xl: "none" }}>
              Here are a few lines from clients I have worked within the past three years of my
              career.
            </Text>
          </VStack>

          <VStack
            w={{ base: "full", xl: "45%" }}
            spacing='50px'
            className='overflow'
            overflowX='hidden'
            mt={{ base: "50px", xl: "0px" }}
          >
            <Comments />
          </VStack>

          <Image
            src={arrow}
            h='60px'
            position={"absolute"}
            top={{ base: "400", xl: "195px" }}
            right={{ base: "-10px", xl: "25px" }}
          />

          <Text
            id='nav'
            position={"absolute"}
            top={{ base: "420px", xl: "220px" }}
            right={{ base: "-53px", xl: "-20px" }}
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
