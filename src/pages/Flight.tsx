import { Box, Container, Image, VStack, useColorModeValue, HStack } from "@chakra-ui/react";
import flight1 from "@/assets/flight1.png";
import flight2 from "@/assets/flight2.png";
import flight3 from "@/assets/flight3.png";
import flight4 from "@/assets/flight4.png";
import flight5 from "@/assets/flight5.png";
import flight6 from "@/assets/flight6.png";
import BaseStack from "@/components/works/BaseStack";
import TopDescription from "@/components/works/TopDescription";
import BaseLink from "@/components/works/BaseLink";

const Flight = () => {
  const textColor = useColorModeValue("black", "white");

  return (
    <Container maxW={{ base: "95%", xl: "6xl" }}>
      <VStack
        color={textColor}
        spacing='50px'
        align='flex-start'
        pt={{ base: "10px", xl: "40px" }}
        pb={{ base: "50px", xl: "130px" }}
        px={{ base: "0px", xl: "30px" }}
      >
        <TopDescription
          title='Flyair'
          weblink=''
          pic={flight1}
          role='UI Design, UX Design'
          list={["Flight booking platform", "Website design", "Mobile App design"]}
        />

        <BaseStack
          title='An Overview'
          sub='Flyair is a pet project in which I envisioned a platform in which travelers can access and make ticket purchases to various destinations all over the world. It consists of a landing page to showcase the platform and a mobile app in which users can search and book tickets to destinations of their choice.'
        />

        <VStack align='flex-start'>
          <BaseStack title='Landing Page' />

          <Box>
            <Image w='full' src={flight2} />
          </Box>
        </VStack>

        <VStack align='flex-start'>
          <BaseStack title='Mobile App' />

          <Box>
            <Image w='full' src={flight3} />
          </Box>
        </VStack>

        <VStack align='flex-start'>
          <BaseStack title='Dark Mode' />
          <Box>
            <Image w='full' src={flight4} />
          </Box>
          <Box pt='20px'>
            <Image w='full' src={flight5} />
          </Box>
        </VStack>

        <BaseLink prevlink='/bulldog-billonaires' nextlink='/bear-venture' textColor={textColor} />
      </VStack>
    </Container>
  );
};

export default Flight;
