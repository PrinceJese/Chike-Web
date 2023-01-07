import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import work4 from "../assets/work4.png";

const Works = () => {
  return (
    <Box>
      <Container maxW='7xl'>
        <VStack align='flex-start' py='80px' spacing='30px' w='full'>
          <Text fontSize='13px' color='#8491A0'>
            My Works
          </Text>

          <Text fontSize='35px' color='#ffffff' fontWeight='bold' lineHeight='30px'>
            Check out some of <br /> my recent works
          </Text>

          <Box py='50px'>
            <Image src={work1} borderRadius='10px' />
          </Box>

          <HStack justify='space-between' w='full'>
            <Image src={work2} borderRadius='10px' />
            <Image src={work3} borderRadius='10px' />
          </HStack>

          <Box py='50px'>
            <Image src={work4} borderRadius='10px' />
          </Box>

          <HStack w='full' justify='flex-end'>
            <Box
              as='button'
              fontSize='11px'
              fontWeight='bold'
              borderRadius='1px'
              px='25px'
              py='10px'
              border='1px'
              borderColor='#5221E6'
              color='#ffffff'
              cursor='default'
              boxShadow='xl'
            >
              VIEW ALL PROJECTS
            </Box>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Works;
