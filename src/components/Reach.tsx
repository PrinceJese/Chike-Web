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
} from "@chakra-ui/react";
import call from "../assets/call.svg";
import mail from "../assets/mail.svg";

const Reach = () => {
  return (
    <Box id='hero'>
      <Container maxW='7xl' id='reach'>
        <Flex w='full' py='100px'>
          <VStack w='50%' spacing='20px' align='flex-start'>
            <Text fontSize='40' fontWeight='bold' color='#ffffff'>
              Wanna get Started?
            </Text>

            <Text w='400px' fontSize='16' color='rgba(255, 255, 255, 0.75);'>
              Are you are looking to hire a product designer? Or are you looking to collaborate on a
              project? Drop me a message and I’ll get back to you ASAP!
            </Text>

            <VStack pt='20px' align='flex-start'>
              <HStack>
                <Image src={mail} />
                <Text color='#8491A0'>ahamefulaayomide@gmail.com</Text>
              </HStack>

              <HStack>
                <Image src={call} />
                <Text color='#8491A0'>+234 708 430 9966</Text>
              </HStack>
            </VStack>
          </VStack>

          <VStack w='50%' align='flex-start' color='white'>
            <form>
              <FormControl pb='35px'>
                <FormLabel fontSize='14px'>Name</FormLabel>
                <Input w='400px' type='name' borderRadius='0px' bg='#424850' />
              </FormControl>

              <FormControl pb='35px'>
                <FormLabel fontSize='14px'>Email</FormLabel>
                <Input w='400px' type='email' borderRadius='0px' bg='#424850' />
              </FormControl>

              <FormControl pb='35px'>
                <FormLabel fontSize='14px'>Message</FormLabel>
                <Textarea w='400px' borderRadius='0px' bg='#424850' />
              </FormControl>

              <Button colorScheme='purple' h='55px' fontSize='12px' w='full' borderRadius='0px'>
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
