import { Box, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import work1 from "@/assets/work1.png";
import work2 from "@/assets/work2.png";
import work3 from "@/assets/work3.png";
import work4 from "@/assets/work4.png";

const Works = () => {
  return (
    <Box>
      <Container maxW={{ base: "95%", xl: "7xl" }} id='works'>
        <VStack align='flex-start' py='80px' spacing='30px' w='full'>
          <Text fontSize='16px' fontWeight='bold' color='#8491A0'>
            My Works
          </Text>

          <Text
            fontSize={{ base: "25px", xl: "35px" }}
            color='#ffffff'
            fontWeight='bold'
            lineHeight='30px'
          >
            Check out some of <br /> my recent works
          </Text>

          <Box pt='50px' pb={{ base: "5px", xl: "50px" }}>
            <Image src={work1} borderRadius='10px' />
          </Box>

          <Flex
            justify='space-between'
            gap={{ base: "30px", xl: "0px" }}
            direction={{ base: "column", xl: "row" }}
            w='full'
          >
            <Image src={work2} borderRadius='10px' />
            <Image src={work3} borderRadius='10px' />
          </Flex>

          <Box pb='20px' pt={{ base: "5px", xl: "50px" }}>
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
              _active={{ bgColor: "#5221E6" }}
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
