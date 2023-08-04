import { Text, VStack } from "@chakra-ui/react";

const BaseStack = ({ title, sub, list }: { title: string; sub?: string; list?: string[] }) => {
  return (
    <VStack align='flex-start' w='full'>
      <Text fontSize='22px' fontWeight='bold'>
        {title}
      </Text>

      <Text fontSize='18px'>{sub}</Text>

      <VStack align='flex-start' fontSize='16px' display={list ? "flex" : "none"}>
        {list?.map((item) => {
          return <Text as='li'>{item}</Text>;
        })}
      </VStack>
    </VStack>
  );
};

export default BaseStack;
