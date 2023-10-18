import { Box, VStack, HStack, Image, Text, Center } from "@chakra-ui/react";
import pic from "@/assets/pic.png";

const Comments = () => {
  return (
    <>
      <VStack
        px='50px'
        pt='30px'
        pb='50px'
        w='95%'
        border='1px'
        borderRadius='5px'
        borderColor='#5B6876'
        align='flex-start'
        spacing='25px'
        _hover={{
          borderImageSlice: 1,
          borderImageSource: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
          transition: "0.6s ease all",
        }}
      >
        <Text fontWeight='bold' fontSize='24px'>
          "With Stylist Piazza, you proved yourself impeccably well and have shown me that your
          trademark is getting the work done. Your delivery is top-notch and of quality. I’m very
          sure you take pride in giving value and excellence in every design you do."
        </Text>

        <HStack>
          {/* <Image src={pic} w='70px' /> */}
          <Center w='70px' h='70px' borderRadius='50%' bg='#3CC74E'>
            <Text color='white' fontSize='24px' fontWeight='700'>
              OC
            </Text>
          </Center>

          <Box color='#5B6876'>
            <Text fontSize='18px' fontWeight='bold'>
              Obiaka Chimaobi
            </Text>
            <Text fontSize='18px'>CE0, Stylist Piazza</Text>
          </Box>
        </HStack>
      </VStack>

      <VStack
        px='50px'
        pt='30px'
        pb='50px'
        w='95%'
        border='1px'
        borderRadius='5px'
        borderColor='#5B6876'
        align='flex-start'
        spacing='25px'
        _hover={{
          borderImageSlice: 1,
          borderImageSource: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
          transition: "0.6s ease all",
        }}
      >
        <Text fontWeight='bold' fontSize='24px'>
          "Chike is an exceptional designer with whom I have worked for years on various types of
          projects. His keen eye for detail and visually appealing, user-centric designs are some of
          the qualities that make him my go-to product designer."
        </Text>

        <HStack>
          {/* <Image src={pic} w='70px' /> */}
          <Center w='70px' h='70px' borderRadius='50%' bg='#5221E6'>
            <Text color='white' fontSize='24px' fontWeight='700'>
              AO
            </Text>
          </Center>

          <Box>
            <Text fontSize='18px' fontWeight='bold' color='#5B6876'>
              AceOluwapelumi
            </Text>
            <Text fontSize='18px' color='#5B6876'>
              Fullstack Developer
            </Text>
          </Box>
        </HStack>
      </VStack>

      <VStack
        px='50px'
        pt='30px'
        pb='50px'
        w='95%'
        border='1px'
        borderRadius='5px'
        borderColor='#5B6876'
        align='flex-start'
        spacing='25px'
        _hover={{
          borderImageSlice: 1,
          borderImageSource: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
          transition: "0.6s ease all",
        }}
      >
        <Text fontWeight='bold' fontSize='24px'>
          "Chike Ahamefula to me is a “design beast” - his ability to conceptualize and execute
          designs is second to none. Chike's professionalism and strong work ethic makes him a great
          team player and an invaluable asset to any design team."
        </Text>

        <HStack>
          {/* <Image src={pic} w='70px' /> */}
          <Center w='70px' h='70px' borderRadius='50%' bg='#8491A0'>
            <Text color='white' fontSize='24px' fontWeight='700'>
              HA
            </Text>
          </Center>

          <Box>
            <Text fontSize='18px' fontWeight='bold' color='#5B6876'>
              Harbzy
            </Text>
            <Text fontSize='18px' color='#5B6876'>
              Brand & UX Designer
            </Text>
          </Box>
        </HStack>
      </VStack>

      {/* <VStack
        px='50px'
        pt='30px'
        pb='50px'
        w='95%'
        border='1px'
        borderRadius='5px'
        borderColor='#5B6876'
        align='flex-start'
        spacing='25px'
      >
        <Text fontWeight='bold' fontSize='24px'>
          ‘’With Stylist Piazza, you proved yourself impeccably well and have shown me that your
          trademark is getting the work done. Your delivery is top-notch and of quality. I’m very
          sure you take pride in giving value and excellence in every design you do.’’
        </Text>

        <HStack>
          // <Image src={pic} w='70px' />

  
  <Cent w='70px' h='70px' borderRadius='50%' bg='blue' e
  <Text color='white' fontSize='24px' fontWeight='700' >OC</Text>r>
  </Cent>        <Box>
            <Text fontSize='18px' fontWeight='bold' color='#5B6876'>
              Obiaka Chimaobi
            </Text>
            <Text fontSize='18px' color='#5B6876'>
              CE0, Stylist Piazza
            </Text>
          </Box>
        </HStack>
      </VStack> */}

      {/* <VStack
        px='50px'
        pt='30px'
        pb='50px'
        w='95%'
        border='1px'
        borderRadius='5px'
        borderColor='#5B6876'
        align='flex-start'
        spacing='25px'
      >
        <Text fontWeight='bold' fontSize='24px'>
          ‘’With Stylist Piazza, you proved yourself impeccably well and have shown me that your
          trademark is getting the work done. Your delivery is top-notch and of quality. I’m very
          sure you take pride in giving value and excellence in every design you do.’’
        </Text>

        <HStack>
          <Image src={pic} w='70px' />

          <Box>
            <Text fontSize='18px' fontWeight='bold' color='#5B6876'>
              Obiaka Chimaobi
            </Text>
            <Text fontSize='18px' color='#5B6876'>
              CE0, Stylist Piazza
            </Text>
          </Box>
        </HStack>
      </VStack> */}
    </>
  );
};

export default Comments;
