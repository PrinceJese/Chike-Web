import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import pic from "@/assets/frame.png";
import phone1 from "@/assets/phone1.png";
import phone2 from "@/assets/phone2.png";
import phone3 from "@/assets/phone3.png";
import page1 from "@/assets/page1.png";
import dashboard1 from "@/assets/dashboard1.png";
import admin1 from "@/assets/admin1.png";
import admin2 from "@/assets/admin2.png";
import admin3 from "@/assets/admin3.png";
import design1 from "@/assets/design1.png";
import design2 from "@/assets/design2.png";
import design3 from "@/assets/design3.png";
import design4 from "@/assets/design4.png";
import BaseStack from "@/components/works/BaseStack";
import BaseLink from "@/components/works/BaseLink";
import TopDescription from "@/components/works/TopDescription";

const TConnect = () => {
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
          title='T-Connect'
          weblink='https://upbeat-benz-9c9d9d.netlify.app/'
          pic={pic}
          role='UI Design, UX Design, Design System, User Research'
          list={["Web3 NFT leasing & renting platform", "Website Design"]}
        />

        <BaseStack
          title='An Overview'
          sub='T-Connect is a Web3 NFT leasing & renting platform that enables users to lease or rent
          out their non-fungible tokens (NFTs) to other users through smart contracts on the
          Ethereum blockchain. Users can list their NFTs, set terms and conditions, and receive
          payments in cryptocurrency. This project aims to provide a secure and convenient way to
          monetize NFTs and access them on rental basis.'
        />

        <BaseStack
          title='Problem(s) to be solved'
          sub='As the Blockchain and Web3 space are relatively new, the product aimed to steer clear of
          common shortcomings of platforms using the technology. These included; trust & security,
          usability, accessibility amongst others. More specifically, the platform had to address
          monetization of tokens by users, thus providing a cryptocurrency payment system and also
          searchability by providing users an easy way to search and browse available NFTs.'
        />

        <BaseStack
          title='Defining Objectives'
          sub='After getting a clear understanding of the problems to be addressed. Key objectives were
          arrived at and divided into four main parts.'
          list={[
            "Transparent and trustable platform",
            "User friendly and accessible Interface",
            "Block chain payment incorporation",
            "Easy searchability of tokens on the platform",
          ]}
        />

        <BaseStack
          title='The Process'
          sub='The process started with researching existing platforms and understanding user needs,
          this was followed by conceptualizing the overall design, including features and
          functionality. After all these were done, prototypes were created and shared with
          clients. Finally, iterations were made before final handover to the development team.'
        />

        <BaseStack
          title='The Design System'
          sub='We created a set of reusable design components and guidelines. This aided visual
          consistency, improved usability and streamline the design and development process.'
        />

        <Flex w='full' justify='center' align='center'>
          <VStack w='full' spacing={{ base: "30px", xl: "40px" }}>
            <Flex
              w='full'
              direction={{ base: "column", xl: "row" }}
              gap='30px'
              justify='space-between'
            >
              <Box>
                <Image src={design1} />
              </Box>

              <Box>
                <Image src={design2} />
              </Box>
            </Flex>

            <Flex w='full' direction={{ base: "column", xl: "row" }} gap='30px'>
              <Box>
                <Image src={design3} />
              </Box>

              <Box>
                <Image src={design4} />
              </Box>
            </Flex>
          </VStack>
        </Flex>

        <BaseStack
          title='The Landing page'
          sub='The Landing Page serves as the primary source of interest, so it had to capture the
          attention of potential visitors . It was designed to communicate the value of the
          platform, brand values of trust and security, and ensure relatively easy usability.'
        />

        <Flex w='full' justify='center' align='center'>
          <Image src={page1} />
        </Flex>

        <BaseStack
          title='Understanding features of the landing page'
          sub='The layout encapsulated all the key features of the platform that included a display of
          different tokens for users to browse through, a CTA that provided a secure
          payment/wallet integration, and most importantly, tools to search and filter across the
          numerous tokens available on the platform.'
        />

        <BaseStack
          title='The Dashboard'
          sub='The dashboard was designed to be simple and functional. It gave users an easily
          navigable dual view of their assets that are on lease and those they have rented .'
        />

        <Flex w='full' justify='center' align='center'>
          <Image src={dashboard1} />
        </Flex>

        <BaseStack
          title='The Admin section'
          sub='As the platform was designed to allow users put up NFTs for lease and also in turn rent
          tokens, there was need for an administrator flow where the admin can authorize and
          control the flow of transactions on the platform.'
        />

        <Flex w='full' justify='center' align='center'>
          <VStack spacing='30px'>
            <Flex
              w={{ base: "full", xl: "90%" }}
              gap='30px'
              direction={{ base: "column", xl: "row" }}
              justify='space-around'
            >
              <Image src={admin1} />
              <Image src={admin2} />
            </Flex>
            <Image src={admin3} />
          </VStack>
        </Flex>

        <BaseStack
          title='Responsiveness'
          sub='Taking a responsive design approach, mobile views of the screens were visualized to
          ensure easy and smooth development process.'
        />

        <Flex w='full' justify='center' align='center'>
          <Flex
            direction={{ base: "column", xl: "row" }}
            gap={{ base: "30px", xl: "0px" }}
            w='90%'
            justify='space-around'
            align='center'
          >
            <Image src={phone1} w={{ base: "80%", xl: "initial" }} />
            <Image src={phone2} w={{ base: "80%", xl: "initial" }} />
            <Image src={phone3} w={{ base: "80%", xl: "initial" }} />
          </Flex>
        </Flex>

        <BaseStack
          title='Conclusion'
          sub='Working on the project was an insightful experience. Collaborating with a team of
          designers, engineers and developers, we were able to deliver a Web3 product where
          clients have access to a secure, functional and accessible platform to exchange NFTs for
          a fee.'
        />

        <BaseLink prevlink='/lfg-pass' nextlink='/stylist-piazza' textColor={textColor} />
      </VStack>
    </Container>
  );
};

export default TConnect;
