import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  chakra,
  shouldForwardProp,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import arrow1 from "@/assets/processarrow.svg";
import arrow2 from "@/assets/processarrow2.svg";
import arrowDark1 from "@/assets/arrowdark1.svg";
import arrowDark2 from "@/assets/arrowdark2.svg";
import React, { useState } from "react";
import tabs from "@/components/Tabs";
import { motion, AnimatePresence, isValidMotionProp } from "framer-motion";

const Processinfo = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("black", "white");
  const textColor2 = useColorModeValue("rgba(0, 0, 0, 0.75)", "rgba(255, 255, 255, 0.75)");

  const ChakraImg = chakra(motion(Image), {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const ChakraText = chakra(motion(Text), {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <Box>
      <Container maxW={{ base: "6xl", xl: "5xl" }}>
        <VStack py='50px' spacing='80px' color={textColor}>
          <VStack w={{ base: "95%", xl: "4xl" }} spacing='30px'>
            <Text fontSize='35px' align='center'>
              My Design Process
            </Text>

            <Text align='center' fontSize='17px'>
              To design a successful project, I follow a process that includes carefully analyzing
              the requirements, gathering inspiration, sketching out initial ideas, and refining
              them through iteration and collaboration with clients and team members. I also pay
              attention to the target audience, budget, and technical limitations to create a final
              product that is both visually appealing and practical.
            </Text>

            <Text></Text>
          </VStack>

          <Flex
            display={{ base: "none", xl: "flex" }}
            fontSize='19px'
            align='center'
            justify='space-between'
            w='full'
            color={textColor2}
            gap={{ base: "30px", xl: "0px" }}
            direction={{ base: "column", xl: "row" }}
          >
            {tabs.map((tab) => (
              <React.Fragment key={tab.title}>
                <HStack
                  justify='center'
                  p='5px'
                  minW='130px'
                  borderRadius='10px'
                  fontWeight='500'
                  bg={selectedTab === tab ? "#181823" : ""}
                  onClick={() => setSelectedTab(tab)}
                  cursor='pointer'
                  color={selectedTab === tab ? "white" : textColor2}
                >
                  <Text>{tab.title}</Text>
                </HStack>

                <Image
                  display={
                    tabs.length - 1 == tabs.indexOf(tab) || tab.title == "Design"
                      ? "none"
                      : "initial"
                  }
                  src={colorMode === "light" ? arrowDark1 : arrow1}
                  h={{ base: "7px", xl: "initial" }}
                  transform={{ base: "rotate(90deg)", xl: "initial" }}
                />

                <Image
                  display={tab.title == "Design" ? "initial" : "none"}
                  src={colorMode === "light" ? arrowDark2 : arrow2}
                  h={{ base: "7px", xl: "initial" }}
                  transform={{ base: "rotate(90deg)", xl: "initial" }}
                />
              </React.Fragment>
            ))}
          </Flex>

          <Flex
            display={{ base: "none", xl: "flex" }}
            align={{ base: "center", xl: "flex-start" }}
            justify='space-between'
            gap={{ base: "50px", xl: "0px" }}
            pb='100px'
            direction={{ base: "column", xl: "row" }}
          >
            <AnimatePresence mode='wait'>
              <ChakraImg
                key={selectedTab ? selectedTab.title : ""}
                src={selectedTab ? selectedTab.icon : ""}
                w={{ base: "80%", xl: "40%" }}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: [0, -25, 10, 0], opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                // @ts-ignore
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            <VStack w={{ base: "90%", xl: "40%" }} spacing='50px'>
              <ChakraText
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                // @ts-ignore
                transition={{ duration: 0.9 }}
                align='center'
                fontSize='17px'
              >
                {selectedTab ? selectedTab.description : ""}
              </ChakraText>

              <VStack spacing='1px' color={textColor2}>
                <ChakraText
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  // @ts-ignore
                  transition={{ duration: 0.9 }}
                >
                  {selectedTab ? selectedTab.text : ""}
                </ChakraText>

                <ChakraText
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  // @ts-ignore
                  transition={{ duration: 0.9 }}
                >
                  {selectedTab ? selectedTab.text2 : ""}
                </ChakraText>

                <ChakraText
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  // @ts-ignore
                  transition={{ duration: 0.9 }}
                >
                  {selectedTab ? selectedTab.text3 : ""}
                </ChakraText>
              </VStack>
            </VStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Processinfo;
