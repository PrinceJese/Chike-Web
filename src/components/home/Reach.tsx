import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Image,
  Text,
  VStack,
  Button,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import call from "@/assets/call.svg";
import mail from "@/assets/mail.svg";

const Reach = () => {
  const textColor = useColorModeValue("black", "white");
  const textColor2 = useColorModeValue("rgba(0, 0, 0, 0.75)", "rgba(255, 255, 255, 0.75)");
  // "#8491A0"

  const bgColor = useColorModeValue("#FFF3E4", "linear-gradient(90deg, #181823 59%, #000000 41%)");

  return (
    <Box bg={bgColor}>
      <Container maxW={{ base: "95%", xl: "7xl" }} id='reach'>
        <Flex w='full' py={{ base: "70px", xl: "100px" }} direction={{ base: "column", xl: "row" }}>
          <VStack w={{ base: "full", xl: "55%" }} spacing='20px' align='flex-start'>
            <Text fontSize={{ base: "35px", xl: "40px" }} fontWeight='bold' color={textColor}>
              Wanna get Started?
            </Text>

            <Text w={{ base: "full", xl: "400px" }} fontSize='17px' color={textColor2}>
              Are you are looking to hire a product designer? Or are you looking to collaborate on a
              project? Drop me a message and I’ll get back to you ASAP!
            </Text>

            <VStack pt='20px' align='flex-start' color={textColor2}>
              <HStack>
                <Image src={mail} />
                <Text fontSize='17px'>ahamefulaayomide@gmail.com</Text>
              </HStack>

              <HStack>
                <Image src={call} />
                <Text fontSize='17px'>+234 708 430 9966</Text>
              </HStack>
            </VStack>
          </VStack>

          <VStack
            w={{ base: "full", xl: "45%" }}
            mt={{ base: "50px", xl: "0px" }}
            // align='flex-start'
            color={textColor}
          >
            <form id='form'>
              <FormControl pb='50px'>
                <FormLabel fontSize='16px'>Name</FormLabel>
                <Input w='full' h='50px' type='name' borderRadius='0px' bg='#424850' />
              </FormControl>

              <FormControl pb='50px'>
                <FormLabel fontSize='16px'>Email</FormLabel>
                <Input w='full' h='50px' type='email' borderRadius='0px' bg='#424850' />
              </FormControl>

              <FormControl pb='50px'>
                <FormLabel fontSize='16px'>Message</FormLabel>
                <Textarea w='full' h='100px' borderRadius='0px' bg='#424850' />
              </FormControl>

              <Button
                colorScheme='purple'
                h='55px'
                fontSize='15px'
                w={{ base: "full", xl: "full" }}
                borderRadius='0px'
              >
                LETS GET STARTED
              </Button>
            </form>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Reach;
