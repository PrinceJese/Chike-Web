import { Box, Container, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import arrow1 from "@/assets/processarrow.svg";
import arrow2 from "@/assets/processarrow2.svg";
import fileicon from "@/assets/fileicon.svg";

const Processinfo = () => {
  return (
    <Box>
      <Container maxW={{ base: "6xl", xl: "5xl" }}>
        <VStack py='50px' spacing='80px' color='white'>
          <VStack w={{ base: "95%", xl: "4xl" }} color='white' spacing='30px'>
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
          </VStack>

          <Flex
            fontSize='20px'
            align='center'
            justify='space-between'
            w='full'
            color='rgba(255, 255, 255, 0.75);'
            gap={{ base: "30px", xl: "0px" }}
            direction={{ base: "column", xl: "row" }}
          >
            <HStack justify='center' p='5px' w='200px' borderRadius='10px' bg='#181823'>
              <Text>Learn</Text>
            </HStack>

            <Image
              src={arrow1}
              h={{ base: "7px", xl: "initial" }}
              transform={{ base: "rotate(90deg)", xl: "initial" }}
            />

            <Text>Strategise</Text>

            <Image
              src={arrow1}
              h={{ base: "7px", xl: "initial" }}
              transform={{ base: "rotate(90deg)", xl: "initial" }}
            />

            <Text>Design</Text>

            <Image
              src={arrow2}
              h={{ base: "7px", xl: "initial" }}
              transform={{ base: "rotate(90deg)", xl: "initial" }}
            />

            <Text>Test & Iterate</Text>

            <Image
              src={arrow1}
              h={{ base: "7px", xl: "initial" }}
              transform={{ base: "rotate(90deg)", xl: "initial" }}
            />

            <Text>Hand-off</Text>
          </Flex>

          <Flex
            align={{ base: "center", xl: "flex-start" }}
            justify='space-between'
            gap={{ base: "50px", xl: "0px" }}
            pb='100px'
            direction={{ base: "column", xl: "row" }}
          >
            <Image src={fileicon} w={{ base: "80%", xl: "40%" }} />

            <VStack w={{ base: "90%", xl: "40%" }} spacing='50px'>
              <Text align='center' fontSize='17px'>
                “Identifying and defining the problem to be solved is crucial to the success of any
                project. In this phase, I make sure I understand everything about the company/brand,
                its market and competitors, the target users and their requirements, and what the
                real problem to be solved is.”
              </Text>

              <VStack spacing='1px' color='rgba(255, 255, 255, 0.75);'>
                <Text>Market Research</Text>

                <Text>Competition Analysis</Text>

                <Text>User Persona & Story</Text>
              </VStack>
            </VStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Processinfo;
