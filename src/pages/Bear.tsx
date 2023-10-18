import { Box, Container, Image, VStack, useColorModeValue, HStack } from "@chakra-ui/react";
import bear1 from "@/assets/bearr.png";
import bear2 from "@/assets/bear2.png";
import bear3 from "@/assets/bear3.png";
import bear4 from "@/assets/bear4.png";
import bear5 from "@/assets/bear5.png";
import bear6 from "@/assets/bear6.png";
import BaseStack from "@/components/works/BaseStack";
import TopDescription from "@/components/works/TopDescription";
import BaseLink from "@/components/works/BaseLink";

const Bear = () => {
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
          title='BearVenture'
          weblink='https://bear-venture-nft.vercel.app/'
          pic={bear1}
          role='UI Design, UX Design'
          list={["NFT minting platform", "Website design"]}
        />

        <BaseStack
          title='An Overview'
          sub='This  project  aimed to create a platform for minting NFTs with secure payment options and a user-friendly interface that will showcase the theme of the community’s NFT collection.  “BearVenture Club is a collection of 7,777 small curious bears (NFT’s) making their way through the forest looking for adventures. A community driven project which gives owners the ability to vote for experiences through the BearVenture community wallet.”'
        />

        <VStack align='flex-start'>
          <BaseStack title='Landing Page' />

          <Box>
            <Image w='full' src={bear2} />
          </Box>
        </VStack>

        <VStack align='flex-start'>
          <BaseStack title='Mint Page' />

          <Box>
            <Image w='full' src={bear3} />
          </Box>
        </VStack>

        <VStack align='flex-start'>
          <BaseStack title='Connect Wallet Page' />

          <Box>
            <Image w='full' src={bear4} />
          </Box>
        </VStack>

        <VStack align='flex-start'>
          <BaseStack title='Error 404 Page' />

          <Box>
            <Image w='full' src={bear5} />
          </Box>
        </VStack>

        <VStack align='flex-start'>
          <BaseStack title='Mobile Screens' />

          <Box>
            <Image w='full' src={bear6} />
          </Box>
        </VStack>

        <BaseLink prevlink='/fly-air' nextlink='/lfg-pass' textColor={textColor} />
      </VStack>
    </Container>
  );
};

export default Bear;
