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
import piaz1 from "@/assets/piaz1.png";
import piaz2 from "@/assets/piaz2.png";
import piaz3 from "@/assets/piaz3.png";
import piaz4 from "@/assets/piaz4.png";
import piaz5 from "@/assets/piaz5.png";
import piaz6 from "@/assets/piaz6.png";
import piaz7 from "@/assets/piaz7.png";
import piaz8 from "@/assets/piaz8.png";
import design1 from "@/assets/design1.png";
import design2 from "@/assets/design2.png";
import BaseStack from "@/components/works/BaseStack";
import BaseLink from "@/components/works/BaseLink";
import TopDescription from "@/components/works/TopDescription";

const Piazza = () => {
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
          title='Stylist Piazza'
          pic={piaz1}
          weblink='https://stylistpiazza.com/'
          role='UI Design, UX Design, User Research'
          list={["Beauty & Lifestyle", "Website Design"]}
        />

        <BaseStack
          title='An Overview'
          sub='Stylist Piazza is a leading beauty and lifestyle platform that provides an space for beauty and fashion professionals to connect with potential  clients and render their services to them.'
        />

        <BaseStack
          title='Defining Objectives'
          sub='The platform needed a simple, yet exquisite landing page to showcase the services and benefits of the mobile application which is available on the App store and Google PlayStore.'
          list={[
            "Simple and clean landing page",
            "User friendly and accessible Interface",
            "CTA to direct customers to download the mobile app",
            "Detailed description of services, feedback and other necessary information",
          ]}
        />

        <BaseStack
          title='The Design System'
          sub='We created a set  of reusable design components and guidelines. This aided visual consistency, improved usability and streamline the design and development process.'
        />

        <Flex w='full' justify='center' align='center'>
          <VStack w='full'>
            <Flex
              w='full'
              direction={{ base: "column", xl: "row" }}
              gap='30px'
              justify='space-between'
            >
              <Box>
                <Image src={piaz2} />
              </Box>

              <Box>
                <Image src={piaz3} />
              </Box>
            </Flex>

            <VStack>
              <Box mt='-70px'>
                <Image src={piaz4} />
              </Box>
            </VStack>
          </VStack>
        </Flex>

        <BaseStack title='Landing Page' />

        <Flex w='full' justify='center' align='center'>
          <Image src={piaz5} />
        </Flex>

        <BaseStack title='Blog Section' />

        <Flex w='full' justify='center' align='center'>
          <Image src={piaz6} />
        </Flex>

        <BaseStack title='About section' />

        <Flex w='full' justify='center' align='center'>
          <Image src={piaz7} />
        </Flex>

        <BaseStack
          title='Responsiveness'
          sub='Taking a responsive design approach, mobile views of the landing page was visualized to ensure easy and smooth development process.ile views of the screens were visualized to
            ensure easy and smooth development process.'
        />

        <Flex w='full' justify='center' align='center'>
          <Image src={piaz8} />
        </Flex>

        <BaseStack
          title='Conclusion'
          sub='Working on the project gave me an opportunity to understand the lifestyle industry and the requirements of its users. It also availed me the experience of working on a B2C platform, which was quite insightful.'
        />

        <BaseLink prevlink='/t-connect' nextlink='/bulldog-billonaires' textColor={textColor} />
      </VStack>
    </Container>
  );
};

export default Piazza;
