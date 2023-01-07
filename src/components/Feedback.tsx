import { Box, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Comments from "./Comments";

const Feedback = () => {
  return (
    <Box bg='#FFF3E4' h='100vh'>
      <Container maxW='7xl' h='full'>
        <Flex w='full' h='full' justify='center' py={{ xl: "50px", "2xl": "80px" }}>
          <VStack w='45%' align='flex-start' spacing='30px'>
            <Text fontSize='30px' fontWeight='bold' lineHeight='30px'>
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
        </Flex>
      </Container>
    </Box>
  );
};

export default Feedback;
