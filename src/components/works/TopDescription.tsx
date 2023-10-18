import { Box, Flex, HStack, Text, VStack, Link, Button } from "@chakra-ui/react";

const TopDescription = ({
  pic,
  title,
  list,
  role,
  weblink,
}: {
  pic: any;
  title: string;
  list: string[];
  role: string;
  weblink: any;
}) => {
  return (
    <VStack align='flex-start' w='full' spacing={{ base: "20px", xl: "50px" }}>
      <Flex
        w='full'
        direction={{ base: "column", xl: "row" }}
        justify='space-between'
        align='flex-start'
        gap={{ base: "15px", xl: "0px" }}
      >
        <VStack w={{ base: "full", xl: "40%" }} spacing='10px' align='flex-start'>
          <Text fontSize='48px' fontWeight='bold'>
            {title}
          </Text>

          <VStack align='flex-start' fontSize='20px' spacing='1px'>
            {list?.map((item) => {
              return (
                <Text fontSize='20px' as='li' fontWeight='300'>
                  {item}
                </Text>
              );
            })}
          </VStack>
        </VStack>

        <Box w={{ base: "full", xl: "60%" }}>
          <Box borderRadius='20px' h={{ base: "210px", xl: "374px" }} w='full' overflow='hidden'>
            <Box className='card' borderRadius='20px' h='full' w='full' bgImg={pic}>
              <Box className='overlay'></Box>
              <Link
                href={weblink}
                isExternal
                pt={{ base: "148px", xl: "270px" }}
                className='overlay2'
                pl={{ base: "20px", xl: "420px" }}
              >
                <Button
                  mt={{ base: "0px", xl: "25px" }}
                  h='45px'
                  borderRadius={{ base: "16px", xl: "20px" }}
                  fontSize='15px'
                  px={{ base: "15px", xl: "25px" }}
                  _hover={{
                    bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
                    color: "white",
                  }}
                  // colorScheme='teal'
                  opacity='0.9'
                  _active={{
                    transform: "scale(0.98)",
                    transition: "0.3s ease all",
                  }}
                >
                  Go to live website
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
      <VStack w='full' align='flex-end'>
        <Text fontSize='32px' fontWeight='bold'>
          My role(s)
        </Text>
        <Text fontSize='20px'>{role}</Text>
      </VStack>
    </VStack>
  );
};

export default TopDescription;
