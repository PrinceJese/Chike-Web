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
import { useLocation } from "react-router-dom";
import call from "@/assets/call.svg";
import mail from "@/assets/mail.svg";
import { Field, Form, Formik } from "formik";

const Reach = () => {
  const textColor = useColorModeValue("black", "white");
  const textColor2 = useColorModeValue("rgba(0, 0, 0, 0.75)", "rgba(255, 255, 255, 0.75)");
  // "#8491A0"
  const bgColor = useColorModeValue("#FFF3E4", "linear-gradient(90deg, #181823 62%, #000000 38%)");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const router = useLocation();

  return (
    <Box bg={router.pathname.includes("contact") ? "" : bgColor}>
      <Container maxW={{ base: "95%", xl: "7xl" }} id='reach'>
        <Flex w='full' py={{ base: "70px", xl: "80px" }} direction={{ base: "column", xl: "row" }}>
          <VStack w={{ base: "full", xl: "62%" }} spacing='10px' align='flex-start'>
            <Text fontSize={{ base: "35px", xl: "48px" }} fontWeight='bold' color={textColor}>
              Wanna get Started?
            </Text>

            <Text
              w={{ base: "full", xl: "450px" }}
              fontSize={{ base: "18px", xl: "20px" }}
              color={textColor2}
            >
              Are you are looking to hire a product designer? Or are you looking to collaborate on a
              project? Drop me a message and I’ll get back to you ASAP!
            </Text>

            <VStack pt='20px' align='flex-start' color={textColor2}>
              <HStack>
                <Image src={mail} />
                <Text fontSize='18px'>ahamefulaayomide@gmail.com</Text>
              </HStack>

              <HStack>
                <Image src={call} />
                <Text fontSize='18px'>+234 708 430 9966</Text>
              </HStack>
            </VStack>
          </VStack>

          <VStack
            w={{ base: "full", xl: "48%" }}
            mt={{ base: "50px", xl: "0px" }}
            color={textColor}
            align='flex-start'
          >
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, values, handleSubmit }) => (
                <Form className='form'>
                  <VStack
                    w={{ base: "full", xl: "526px" }}
                    spacing={{ base: "30px", xl: "40px" }}
                    color={textColor}
                  >
                    <VStack spacing='15px' align='flex-start' w='full'>
                      <Text>Name</Text>
                      <Field
                        as={Input}
                        color='white'
                        name='name'
                        // variant='filled'
                        borderRadius='3px'
                        bg='#424850'
                        w='full'
                        h='50px'
                        fontSize='18px'
                        fontWeight='500'
                        borderWidth='1px'
                        type='text'
                        _focus={{ bg: "light.200" }}
                        _hover={{
                          bg: "light.200",
                        }}
                      />
                    </VStack>

                    <VStack spacing='15px' align='flex-start' w='full'>
                      <Text>Email</Text>
                      <Field
                        as={Input}
                        color='white'
                        name='email'
                        // variant='filled'
                        borderRadius='3px'
                        bg='#424850'
                        w='full'
                        h='50px'
                        fontSize='18px'
                        fontWeight='500'
                        borderWidth='1px'
                        type='email'
                        _focus={{ bg: "light.200" }}
                        _hover={{
                          bg: "light.200",
                        }}
                      />
                    </VStack>

                    <VStack spacing='15px' align='flex-start' w='full'>
                      <Text>Message</Text>
                      <Field
                        as={Textarea}
                        color='white'
                        name='message'
                        // variant='outline'
                        borderRadius='3px'
                        bg='#424850'
                        w='full'
                        h='100px'
                        fontSize='18px'
                        fontWeight='500'
                        borderWidth='1px'
                        type='text'
                        _focus={{ bg: "light.200" }}
                        _hover={{
                          bg: "light.200",
                        }}
                      />
                    </VStack>

                    <Box
                      w={{ base: "full", xl: "535px" }}
                      h='80px'
                      borderLeftWidth='2px'
                      borderBottomWidth='2px'
                      borderRadius='10px'
                      pl='8px'
                      borderColor='#BA42C0'
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
                        <Button
                          fontSize='18px'
                          fontWeight='bold'
                          borderWidth='1px'
                          h='75px'
                          w={{ base: "full", xl: "526px" }}
                          px='30px'
                          borderRadius='3px'
                          borderColor='#5221E6'
                          color='white'
                          // bg='none'
                          bg='linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)'
                          _active={{
                            bgColor: "#5221E6",
                            transform: "scale(0.98)",
                            transition: "0.3s ease all",
                          }}
                          _hover={{ bgColor: "#5221E6" }}
                          _focus={{ bgColor: "#5221E6" }}
                          onClick={() => handleSubmit()}
                        >
                          LET'S GET STARTED
                        </Button>
                      </Box>
                    </Box>
                  </VStack>
                </Form>
              )}
            </Formik>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Reach;
