import { Box } from "@chakra-ui/react";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Herosection from "./Herosection";
import Navbar from "./Navbar";
import Process from "./Process";
import Reach from "./Reach";
import Works from "./Works";

const App = () => {
  return (
    <Box bg='#000000'>
      <Navbar />
      <Herosection />
      <Process />
      <Works />
      <Feedback />
      <Reach />
      <Footer />
    </Box>
  );
};

export default App;
