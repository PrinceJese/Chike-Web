import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  VStack,
  useColorModeValue,
  Center,
  HStack,
  Link,
} from "@chakra-ui/react";
import about from "@/assets/contactImg.png";

const About = () => {
  const textColor = useColorModeValue("black", "white");

  const bgColor = useColorModeValue(
    "linear-gradient(90deg, #181823 50%, #FFF3E4 50%)",
    "linear-gradient(90deg, #181823 50%, #000000 50%)"
  );
  return (
    <Box>
      <Container maxW='7xl'>
        <VStack w='full' spacing='30px'>
          <Flex direction={{ base: "column", xl: "row" }} w='full' color={textColor}>
            <VStack
              w={{ base: "full", xl: "50%" }}
              h={{ base: "470px", xl: "initial" }}
              justify='center'
            >
              <Center
                w={{ base: "300px", xl: "456px" }}
                h={{ base: "300px", xl: "456px" }}
                borderRadius='50%'
                bg='#181823'
              >
                <Image src={about} />
              </Center>
            </VStack>

            <VStack
              w={{ base: "full", xl: "50%" }}
              align='flex-end'
              spacing='50px'
              justify='center'
              py={{ base: "0px", xl: "20px", "2xl": "30px" }}
              px={{ base: "0px", xl: "70px" }}
            >
              <VStack spacing='20px' fontSize={{ base: "18px", xl: "20px" }}>
                <Text>
                  Hello and welcome to my personal website! My name is Chike and I am a product
                  designer based in Lagos, Nigeria.
                </Text>

                <Text>
                  I am a Product designer with over three years of experience in designing and
                  creating cross-platform compatible and user-centric products. I am proficient in
                  the area of user experience research, visual design, interaction design, user
                  experience writing, persona creation, wireframing and prototyping, and I have
                  honed my skills through my experience working at various roles across different
                  multinational organization ranging from Fintech, Web3 to Lifestyle based.
                </Text>

                <Text>
                  I specialize in website and mobile application design and have a track record of
                  successfully taking projects from concept to launch. I am constantly seeking out
                  new challenges and opportunities to learn and grow as a designer.
                </Text>

                <Text>
                  When I'm not designing, you can find me watching football or playing video games
                  (You can send me an invite on FIFA). Thank you for visiting my website and please
                  don't hesitate to reach out if you have any questions or would like to work
                  together.
                </Text>
              </VStack>
            </VStack>
          </Flex>

          <HStack w='full' justify='center'>
            <Box
              w='256px'
              h='62px'
              borderLeftWidth='2px'
              borderBottomWidth='2px'
              borderRadius='8px'
              pl='5px'
              borderColor='green'
              _hover={{
                transform: "scale(1.02)",
                transition: "0.3s ease all",
              }}
              _active={{
                bgColor: "#5221E6",
                transform: "scale(0.98)",
                transition: "0.3s ease all",
              }}
            >
              <Box mt='-5px'>
                <Link
                  href='https://drive.google.com/file/d/1BQBsqQwcLBaOhJPhvTv3KhbhF0Pz1dF6/view?usp=drive_link'
                  isExternal
                >
                  <Button
                    bg='#9d9d9dc0'
                    w='250px'
                    h='59px'
                    borderRadius='5px'
                    fontSize={{ base: "17px", xl: "18px" }}
                    _hover={{ bgColor: "#9d9d9dc0", opacity: "0.7", transition: "0.3s ease all" }}
                    _focus={{ bgColor: "#9d9d9dc0" }}
                    _active={{
                      bgColor: "#9d9d9d92",
                      opacity: "0.7",
                      transform: "scale(0.98)",
                      transition: "0.3s ease all",
                    }}
                  >
                    MY RESUME
                  </Button>
                </Link>
              </Box>
            </Box>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
