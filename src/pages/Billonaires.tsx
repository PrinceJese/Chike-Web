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
import tabs from "@/components/Tabs";

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
        <Flex
          w='full'
          direction={{ base: "column", xl: "row" }}
          justify='space-between'
          align='flex-start'
          gap={{ base: "15px", xl: "0px" }}
        >
          <VStack w={{ base: "full", xl: "20%" }} spacing='10px' align='flex-start'>
            <Text fontSize='40px' fontWeight='bold' lineHeight='40px'>
              Bull-Dog Billonaires
            </Text>

            <Text w='200px' fontSize='16px'>
              NFT monitoring system
            </Text>
          </VStack>

          <Box w={{ base: "full", xl: "60%" }}>
            <Box
              w='full'
              className='card'
              borderRadius='20px'
              bgImg={work4}
              h={{ base: "210px", xl: "400px" }}
            />
          </Box>
        </Flex>
        <HStack w='full' justify='space-between' align='flex-start'>
          <Box w='250px'>
            <Text fontSize='19px' fontWeight='bold'>
              Co-contributors
            </Text>

            <Text fontSize='16px'>Aceoluwapelumi, A.T.S, Curly Braces, Harbzy</Text>
          </Box>

          <Box w='250px'>
            <Text fontSize='19px' fontWeight='bold'>
              My role(s)
            </Text>

            <Text fontSize='16px'>UI Design, UX Design, Design System, User Research</Text>
          </Box>
        </HStack>

        <VStack align='flex-start' pt='70px'>
          <Text fontSize='22px' fontWeight='bold'>
            An Overview
          </Text>

          <Text fontSize='18px'>
            Bull-Dog Billionaires is an NFT project with 3000 tokens. The owners of the project
            desired to have a comprehensive and user-friendly tool that provides real-time
            information and analysis of the community’s NFTs on the Ethereum blockchain. It will
            allow users to track NFTs they own, view transaction history, and receive alerts for
            market events.
          </Text>
        </VStack>

        <VStack align='flex-start'>
          <Text fontSize='22px' fontWeight='bold'>
            Problem(s) to be solved
          </Text>

          <Text fontSize='18px'>
            The project's goal is to solve the issue of providing a user-friendly interface for
            monitoring the NFT community on the blockchain, by creating a centralized dashboard that
            displays various market metrics, allows tracking specific NFTs, viewing transaction
            history, updating activity of community members and receive alerts.
          </Text>
        </VStack>

        <VStack align='flex-start'>
          <Text fontSize='22px' fontWeight='bold'>
            Defining Objectives
          </Text>

          <Text fontSize='18px'>
            Having gotten a clear understanding of the problem to be solved, three key objectives
            were itemized.
          </Text>

          <VStack align='flex-start' fontSize='16px'>
            <Text as='li'>User friendly and accessible Interface</Text>
            <Text as='li'>
              Monitoring Dashboard with required information ( transaction history, price changes,
              social activity)
            </Text>
          </VStack>
        </VStack>

        <VStack align='flex-start'>
          <Text fontSize='22px' fontWeight='bold'>
            The Process
          </Text>

          <Text fontSize='18px'>
            The project began with researching similar platforms and identifying user requirements,
            then moved on to designing the overall concept, including features and functionality.
            Prototypes were then developed and presented to clients, with revisions made before the
            final version was handed off to the development team.
          </Text>
        </VStack>

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

        <VStack align='flex-start'>
          <Text fontSize='22px' fontWeight='bold'>
            The Design System
          </Text>

          <Text fontSize='18px'>
            By developing a collection of reusable design elements and guidelines, we were able to
            enhance visual consistency, enhance usability, and streamline the design and development
            process.
          </Text>
        </VStack>

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

        <VStack align='flex-start' pt='20px'>
          <Text fontSize='22px' fontWeight='bold'>
            The Dashboard
          </Text>

          <Text fontSize='18px'>
            The Landing Page serves as the primary source of interest, so it had to capture the
            attention of potential visitors . It was designed to communicate the value of the
            platform, brand values of trust and security, and ensure relatively easy usability.
          </Text>
        </VStack>

        <Flex w='full' align='center' justify='center' pt='40px'>
          <Image src={bulldog5} />
        </Flex>

        <VStack align='flex-start'>
          <Text fontSize='18px' fontWeight='bold'>
            Understanding features of the dashboard
          </Text>

          <Text fontSize='16px'>
            The dashboard was designed to provide clear and concise information about price action,
            community activities, revenue information and total NFT count of tokens available on the
            platform.
          </Text>
        </VStack>

        <VStack align='flex-start' pt='20px'>
          <Text fontSize='22px' fontWeight='bold'>
            Activity screens
          </Text>

          <Text fontSize='18px'>
            Two activity screens were designed. One shows information about the sales and purchase
            of tokens on the platform (sales activity) and the other shows the social activity of
            community members.
          </Text>
        </VStack>

        <Flex w='full' align='center' justify='center'>
          <VStack spacing='30px'>
            <Image src={bulldog6} />
            <Image src={bulldog6} />
          </VStack>
        </Flex>

        <VStack align='flex-start' pt='20px'>
          <Text fontSize='22px' fontWeight='bold'>
            Conclusion
          </Text>

          <Text fontSize='18px'>
            Working on the project was an insightful experience. Collaborating with a team of
            designers, engineers and developers, we were able to deliver a Web3 product where
            clients have access to a secure, functional and accessible platform to exchange NFTs for
            a fee.
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Billonaires;
