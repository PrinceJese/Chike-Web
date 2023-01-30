import { Box, Button, Container, Flex, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const About = () => {
  const textColor = useColorModeValue("black", "white");

  const bgColor = useColorModeValue(
    "linear-gradient(90deg, #181823 50%, #FFF3E4 50%)",
    "linear-gradient(90deg, #181823 50%, #000000 50%)"
  );
  return (
    <Box bg={{ base: "initial", xl: bgColor }}>
      <Container maxW='7xl'>
        <Flex direction={{ base: "column", xl: "row" }} w='full' color={textColor}>
          <VStack
            w={{ base: "full", xl: "50%" }}
            h={{ base: "470px", xl: "initial" }}
            bg={{ base: "#181823", xl: "initial" }}
          ></VStack>

          <VStack
            w={{ base: "full", xl: "50%" }}
            align='flex-end'
            spacing='50px'
            justify='center'
            py={{ base: "70px", xl: "100px", "2xl": "150px" }}
            px={{ base: "0px", xl: "70px" }}
          >
            <VStack spacing='20px' fontSize={{ base: "18px", xl: "15px" }}>
              <Text>
                Hello and welcome to my personal website! My name is Chike and I am a product
                designer based in Lagos, Nigeria.
              </Text>

              <Text>
                I am a Product designer with over three years of experience in designing and
                creating cross-platform compatible and user-centric products. I am proficient in the
                area of user experience research, visual design, interaction design, user experience
                writing, persona creation, wireframing and prototyping, and I have honed my skills
                through my experience working at various roles across different multinational
                organization ranging from Fintech, Web3 to Lifestyle based.
              </Text>

              <Text>
                I specialize in website and mobile application design and have a track record of
                successfully taking projects from concept to launch. I am constantly seeking out new
                challenges and opportunities to learn and grow as a designer.
              </Text>

              <Text>
                When I'm not designing, you can find me watching football or playing video games
                (You can send me an invite on FIFA). Thank you for visiting my website and please
                don't hesitate to reach out if you have any questions or would like to work
                together.
              </Text>
            </VStack>

            <Button
              bg='#9d9d9dc0'
              w='250px'
              fontSize={{ base: "17px", xl: "14px" }}
              borderRadius='2px'
              _active={{ bgColor: "#9d9d9d92" }}
              _hover={{ bgColor: "#9d9d9dc0" }}
              h='50px'
            >
              RESUME
            </Button>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
