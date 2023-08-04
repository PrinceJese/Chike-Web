import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BaseLink = ({
  title,
  sub,
  textColor,
  nextlink,
}: {
  title: string;
  sub: string;
  textColor: any;
  nextlink?: any;
}) => {
  return (
    <Flex
      w='full'
      justify='space-between'
      gap='20px'
      align='flex-start'
      pt='20px'
      direction={{ base: "column", xl: "row" }}
      borderTopWidth='2px'
      borderColor={textColor}
    >
      <Text fontWeight='700'>next project</Text>

      <Link to={nextlink}>
        <Box _hover={{ transform: "scale(0.98)" }}>
          <Text fontSize='19px' fontWeight='bold'>
            {title}
          </Text>
          <Text>{sub}</Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default BaseLink;
