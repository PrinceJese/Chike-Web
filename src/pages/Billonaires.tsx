import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import arrow1 from "@/assets/processarrow.svg";
import arrow2 from "@/assets/processarrow2.svg";
import arrowDark1 from "@/assets/arrowdark1.svg";
import arrowDark2 from "@/assets/arrowdark2.svg";
import work4 from "@/assets/work4.png";
import bulldog1 from "@/assets/bulldog1.png";
import bulldog2 from "@/assets/bulldog2.png";
import bulldog3 from "@/assets/bulldog3.png";
import bulldog4 from "@/assets/bulldog4.png";
import bulldog5 from "@/assets/bulldog5.png";
import bulldog6 from "@/assets/bulldog6.png";
import tabs from "@/components/process/Tabs";
import BaseLink from "@/components/works/BaseLink";
import BaseStack from "@/components/works/BaseStack";
import TopDescription from "@/components/works/TopDescription";

const Billonaires = () => {
  const { colorMode } = useColorMode();
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
          title='Bull-Dog Billonaires'
          pic={work4}
          role='UI Design, UX Design, Design System, User Research'
          list={["NFT monitoring system"]}
        />

        <BaseStack
          title=' An Overview'
          sub='Bull-Dog Billionaires is an NFT project with 3000 tokens. The owners of the project
          desired to have a comprehensive and user-friendly tool that provides real-time
          information and analysis of the community’s NFTs on the Ethereum blockchain. It will
          allow users to track NFTs they own, view transaction history, and receive alerts for
          market events.'
        />

        <BaseStack
          title='Problem(s) to be solved'
          sub="The project's goal is to solve the issue of providing a user-friendly interface for
          monitoring the NFT community on the blockchain, by creating a centralized dashboard that
          displays various market metrics, allows tracking specific NFTs, viewing transaction
          history, updating activity of community members and receive alerts."
        />

        <BaseStack
          title='Defining Objectives'
          sub='Having gotten a clear understanding of the problem to be solved, three key objectives
          were itemized.'
          list={[
            "User friendly and accessible Interface",
            "Monitoring Dashboard with required information ( transaction history, price changes,social activity)",
          ]}
        />

        <BaseStack
          title='The Process'
          sub='The project began with researching similar platforms and identifying user requirements,
          then moved on to designing the overall concept, including features and functionality.
          Prototypes were then developed and presented to clients, with revisions made before the
          final version was handed off to the development team.'
        />

        <Flex w='full' align='center' justify='center'>
          <HStack w='full' spacing='0px' pb='20px'>
            {tabs.map((tab) => (
              <HStack spacing='0px'>
                <VStack>
                  <Image src={tab.icon} w='80%' />
                  <Text display={{ base: "none", xl: "block" }}>{tab.title}</Text>
                </VStack>

                <VStack
                  display={
                    tabs.length - 1 == tabs.indexOf(tab) || tab.title == "Design"
                      ? "none"
                      : "initial"
                  }
                >
                  <Image src={colorMode === "light" ? arrowDark1 : arrow1} w='200px' />
                </VStack>

                <VStack display={tab.title == "Design" ? "initial" : "none"}>
                  <Image src={colorMode === "light" ? arrowDark2 : arrow2} w='200px' />
                </VStack>
              </HStack>
            ))}
          </HStack>
        </Flex>

        <BaseStack
          title='The Design System'
          sub='By developing a collection of reusable design elements and guidelines, we were able to
          enhance visual consistency, enhance usability, and streamline the design and development
          process.'
        />

        <Flex w='full' justify='center' align='center'>
          <Flex w='full'>
            <VStack w='45%' align='flex-start' spacing='0'>
              <Image src={bulldog1} />

              <Flex w='full' align='center' justify='flex-end' gap='0' py='-10px'>
                <VStack w='full' align='flex-end'>
                  <Image src={bulldog2} />
                </VStack>
              </Flex>

              <Image src={bulldog3} />
            </VStack>

            <VStack w='55%' justify='flex-end'>
              <Image src={bulldog4} />
            </VStack>
          </Flex>
        </Flex>

        <BaseStack
          title='The Dashboard'
          sub='The Landing Page serves as the primary source of interest, so it had to capture the
          attention of potential visitors . It was designed to communicate the value of the
          platform, brand values of trust and security, and ensure relatively easy usability.'
        />

        <Flex w='full' align='center' justify='center' pt='40px'>
          <Image src={bulldog5} />
        </Flex>

        <BaseStack
          title='Understanding features of the dashboard'
          sub='The dashboard was designed to provide clear and concise information about price action,
          community activities, revenue information and total NFT count of tokens available on the
          platform.'
        />

        <BaseStack
          title='Activity screens'
          sub='Two activity screens were designed. One shows information about the sales and purchase
          of tokens on the platform (sales activity) and the other shows the social activity of
          community members.'
        />

        <Flex w='full' align='center' justify='center'>
          <VStack spacing='30px'>
            <Image src={bulldog6} />
            <Image src={bulldog6} />
          </VStack>
        </Flex>

        <BaseStack
          title='Conclusion'
          sub='Working on the project was an insightful experience. Collaborating with a team of
          designers, engineers and developers, we were able to deliver a Web3 product where
          clients have access to a secure, functional and accessible platform to exchange NFTs for
          a fee.'
        />

        <BaseLink
          title='Flyair'
          nextlink='/fly-air'
          sub='Flight booking platform'
          textColor={textColor}
        />
      </VStack>
    </Container>
  );
};

export default Billonaires;
