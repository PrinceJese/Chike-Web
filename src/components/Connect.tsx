import { Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import linkedin from "@/assets/linkedin.svg";
import twitter from "@/assets/twitter.svg";
import dribble from "@/assets/dribble.svg";
import behance from "@/assets/behance.svg";
import insta from "@/assets/insta.svg";

const Connect = () => {
  return (
    <Container maxW='7xl'>
      <Flex
        w='100%'
        justify='space-between'
        gap={{ base: "60px", xl: "0px" }}
        pb='100px'
        pt={{ base: "50px", xl: "0px" }}
        direction={{ base: "column", xl: "row" }}
      >
        <VStack w={{ base: "full", xl: "30%" }} align='flex-start'>
          <Text
            color='white'
            align={{ base: "center", xl: "initial" }}
            fontSize={{ base: "25px", xl: "33px" }}
            fontWeight='bold'
            lineHeight={{ base: "32px", xl: "39px" }}
          >
            Would you love to get to know me more? Follow me on social media
          </Text>
        </VStack>

        <VStack w={{ base: "full", xl: "50%" }} spacing={{ base: "30px", xl: "70px" }}>
          <HStack spacing={{ base: "50px", xl: "70px" }}>
            <Image src={dribble} w={{ base: "75px", xl: "initial" }} />
            <Image src={twitter} w={{ base: "75px", xl: "initial" }} />
            <Image src={behance} w={{ base: "75px", xl: "initial" }} />
          </HStack>

          <HStack spacing={{ base: "50px", xl: "70px" }}>
            <Image src={linkedin} w={{ base: "75px", xl: "initial" }} />
            <Image src={insta} w={{ base: "75px", xl: "initial" }} />
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Connect;
