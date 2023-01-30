import { Box, Image, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import tabs from "./Tabs";
import arrow1 from "@/assets/processarrow.svg";
import arrow2 from "@/assets/processarrow2.svg";
import arrowDark1 from "@/assets/arrowdark1.svg";
import arrowDark2 from "@/assets/arrowdark2.svg";

const ProcessMobile = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("black", "white");
  const textColor2 = useColorModeValue("rgba(0, 0, 0, 0.75)", "rgba(255, 255, 255, 0.75)");

  return (
    <VStack spacing='30px' pb='80px' display={{ base: "flex", xl: "none" }} color={textColor}>
      {tabs.map((tab) => (
        <>
          <Box p='10px' w='280px' borderRadius='10px' fontSize='22px' bg='#181823'>
            <Text textAlign='center' color='rgba(255, 255, 255, 0.75);'>
              {tab.title}
            </Text>
          </Box>

          <Box w='90%' fontSize='19px'>
            <Text textAlign='center'>{tab.description}</Text>
          </Box>

          <VStack spacing='0' color={textColor2}>
            <Text textAlign='center'>{tab.text}</Text>
            <Text textAlign='center'>{tab.text2}</Text>
            <Text textAlign='center'>{tab.text3}</Text>
          </VStack>

          <Image src={tab.icon} w='70%' />

          <Box
            pt='20px'
            pb='60px'
            display={
              tabs.length - 1 == tabs.indexOf(tab) || tab.title == "Design" ? "none" : "initial"
            }
          >
            <Image src={colorMode === "light" ? arrowDark1 : arrow1} transform='rotate(90deg)' />
          </Box>

          <Box
            pt='20px'
            pb='60px'
            display={tab.title == "Design" ? "initial" : "none"}
            h={{ base: "7px", xl: "initial" }}
          >
            <Image src={colorMode === "light" ? arrowDark2 : arrow2} transform='rotate(90deg)' />
          </Box>
        </>
      ))}
    </VStack>
  );
};

export default ProcessMobile;
