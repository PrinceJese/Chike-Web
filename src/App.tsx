import { Box, useColorModeValue } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import AboutMe from "@/pages/AboutMe";
import Works from "@/pages/Works";
import DesignProcess from "@/pages/DesignProcess";
import Home from "@/pages/Home";
import { useState } from "react";
import TConnect from "./pages/TConnect";
import Billonaires from "./pages/Billonaires";
import Bear from "./pages/Bear";
import Lfg from "./pages/Lfg";
import Flight from "./pages/Flight";
import Piazza from "./pages/Piazza";
import ContactForm from "./pages/contact";

const App = () => {
  const bgColor = useColorModeValue("#FFF3E4", "#000000");

  const [colour, setColour] = useState<string>("black");

  const handleFooterColour = (): any => {
    setColour("#181823");
  };

  const handleHomeFooter = (): any => {
    setColour("black");
  };

  return (
    <Router>
      <Box bg={bgColor}>
        <Navbar onLinkClick={handleFooterColour} onHomeClick={handleHomeFooter} />

        <Routes>
          <Route path='/' element={<Home onLinkClick={handleFooterColour} />} />

          <Route path='/t-connect' element={<TConnect />} />

          <Route path='/bulldog-billonaires' element={<Billonaires />} />

          <Route path='/bear-venture' element={<Bear />} />

          <Route path='/lfg-pass' element={<Lfg />} />

          <Route path='/fly-air' element={<Flight />} />

          <Route path='/stylist-piazza' element={<Piazza />} />

          <Route path='/about' element={<AboutMe />} />

          <Route path='/process' element={<DesignProcess />} />

          <Route path='/works' element={<Works />} />

          <Route path='/contact' element={<ContactForm />} />
        </Routes>

        <Footer
          footerColour={colour}
          onLinkClick={handleFooterColour}
          onHomeClick={handleHomeFooter}
        />
      </Box>
    </Router>
  );
};

export default App;
