import { Box, Flex, HStack, Text, Link } from "@chakra-ui/react";

const BaseLink = ({
  textColor,
  nextlink,
  prevlink,
}: {
  textColor: any;
  nextlink: any;
  prevlink: any;
}) => {
  return (
    <Flex
      w='full'
      justify='space-between'
      gap='20px'
      align='flex-start'
      pt='20px'
      direction={{ base: "row", xl: "row" }}
      borderTopWidth='2px'
      borderColor={textColor}
    >
      <Link _hover={{ textDecor: "none" }} href={prevlink}>
        <Box>
          <Text
            fontSize={{ base: "24px", xl: "32px" }}
            fontWeight='bold'
            _active={{ transform: "scale(0.98)", transition: "0.2s ease-in-out" }}
            _hover={{
              bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
              bgClip: "text",
              WebkitTextFillColor: "transparent",
              transform: "scale(0.98)",
              transition: "0.2s ease-in-out",
            }}
          >
            prevProject
          </Text>
        </Box>
      </Link>

      <Link _hover={{ textDecor: "none" }} href={nextlink}>
        <Box>
          <Text
            fontSize={{ base: "24px", xl: "32px" }}
            fontWeight='bold'
            _active={{ transform: "scale(0.98)", transition: "0.2s ease-in-out" }}
            _hover={{
              bg: "linear-gradient(180deg, #5221e6 0.06%, #ba42c0 99.94%)",
              bgClip: "text",
              WebkitTextFillColor: "transparent",
              transform: "scale(0.98)",
              transition: "0.2s ease-in-out",
            }}
          >
            nextProject
          </Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default BaseLink;
