import { Box, Container, Image, VStack, useColorModeValue, HStack } from "@chakra-ui/react";
import lfg1 from "@/assets/lfg1.png";
import lfg2 from "@/assets/lfg2.png";
import lfg3 from "@/assets/lfg3.png";
import lfg4 from "@/assets/lfg4.png";
import lfg5 from "@/assets/lfg5.png";
import lfg6 from "@/assets/lfg6.png";
import BaseStack from "@/components/works/BaseStack";
import TopDescription from "@/components/works/TopDescription";
import BaseLink from "@/components/works/BaseLink";

const Lfg = () => {
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
          title='LFG Pass'
          pic={lfg1}
          role='UI Design, UX Design'
          list={["NFT minting platform"]}
        />

        <BaseStack
          title='An Overview'
          sub='LFG Pass is the ultimate insider club for all things Web3, NFT, and Metaverse. Its exclusive NFT grants access to the most coveted membership in cyberspace.'
        />

        <VStack align='flex-start'>
          <BaseStack title='Landing Page' />
          <Box>
            <Image w='full' src={lfg2} />
          </Box>
        </VStack>

        <VStack align='flex-start'>
          <BaseStack title='Mint Page' />
          <Box>
            <Image w='full' src={lfg3} />
          </Box>
        </VStack>

        <VStack align='flex-start'>
          <BaseStack title='Utilities Page' />
          <Box>
            <Image w='full' src={lfg4} />
          </Box>
        </VStack>

        <VStack align='flex-start'>
          <BaseStack title='FAQ Page' />
          <Box>
            <Image w='full' src={lfg5} />
          </Box>
        </VStack>

        <VStack align='flex-start'>
          <BaseStack title='Mobile Screens' />
          <Box>
            <Image w='full' src={lfg6} />
          </Box>
        </VStack>

        <BaseLink
          title='T-Connect'
          nextlink='/t-connect'
          sub='Web3 NFT leasing & renting platform'
          textColor={textColor}
        />
      </VStack>
    </Container>
  );
};

export default Lfg;
