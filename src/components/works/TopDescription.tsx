import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

const TopDescription = ({
  pic,
  title,
  list,
  role,
}: {
  pic: any;
  title: string;
  list: string[];
  role: string;
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
        <VStack w={{ base: "full", xl: "20%" }} spacing='10px' align='flex-start'>
          <Text fontSize='40px' fontWeight='bold'>
            {title}
          </Text>

          <VStack align='flex-start' fontSize='16px'>
            {list?.map((item) => {
              return (
                <Text fontSize='16px' as='li'>
                  {item}
                </Text>
              );
            })}
          </VStack>
        </VStack>

        <Box w={{ base: "full", xl: "60%" }}>
          <Box
            w='full'
            className='card'
            borderRadius='20px'
            bgImg={pic}
            h={{ base: "210px", xl: "400px" }}
          />
        </Box>
      </Flex>
      <HStack w='full' justify='flex-end' align='flex-start'>
        <Box>
          <Text fontSize='19px' fontWeight='bold'>
            My role(s)
          </Text>
          <Text fontSize='16px'>{role}</Text>
        </Box>
      </HStack>
    </VStack>
  );
};

export default TopDescription;
