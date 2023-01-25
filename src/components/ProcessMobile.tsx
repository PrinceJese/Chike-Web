import { Box, Image, Tab, Text, VStack } from "@chakra-ui/react";
import tabs from "./Tabs";
import arrow1 from "@/assets/processarrow.svg";
import arrow2 from "@/assets/processarrow2.svg";

const ProcessMobile = () => {
  return (
    <VStack spacing='30px' pb='80px' display={{ base: "flex", xl: "none" }} color='white'>
      {tabs.map((tab) => (
        <>
          <Box p='10px' w='280px' borderRadius='10px' fontSize='22px' bg='#181823'>
            <Text textAlign='center' color='rgba(255, 255, 255, 0.75);'>
              {tab.title}
            </Text>
          </Box>

          <Box w='95%' fontSize='22px'>
            <Text textAlign='center'>{tab.description}</Text>
          </Box>

          <VStack spacing='0' color='rgba(255, 255, 255, 0.75);'>
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
            <Image src={arrow1} transform='rotate(90deg)' />
          </Box>

          <Box
            pt='20px'
            pb='60px'
            display={tab.title == "Design" ? "initial" : "none"}
            h={{ base: "7px", xl: "initial" }}
          >
            <Image src={arrow2} transform='rotate(90deg)' />
          </Box>
        </>
      ))}
    </VStack>
  );
};

export default ProcessMobile;
