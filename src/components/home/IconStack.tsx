import { Box, Container, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import processlogo1 from "@/assets/processlogo1.svg";
import processlogo2 from "@/assets/processlogo2.svg";
import processlogo3 from "@/assets/processlogo3.svg";
import processlogo4 from "@/assets/processlogo4.svg";
import processlogo5 from "@/assets/processlogo5.svg";
import processlogo6 from "@/assets/processlogo6.svg";

const IconStack = () => {
  const bgColor = useColorModeValue("#FFF3E4", "black");

  return (
    <Box h={{ base: "80px", xl: "150px" }} p='0' bg={bgColor}>
      <Container
        maxW={{ base: "95%", xl: "6xl" }}
        h='100%'
        overflow='hidden'
        position='relative'
        className='scrolly overflow'
      >
        <Flex align='center' w='200%' h='full' className='scrollon' position='absolute'>
          <Flex w='full' justify='space-around'>
            <Image src={processlogo1} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo2} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo3} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo4} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo5} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo6} w={{ base: "35px", xl: "45px" }} />
          </Flex>

          <Flex w='full' justify='space-around'>
            <Image src={processlogo1} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo2} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo3} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo4} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo5} w={{ base: "35px", xl: "45px" }} />
            <Image src={processlogo6} w={{ base: "35px", xl: "45px" }} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default IconStack;
