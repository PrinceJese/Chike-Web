import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutMe from "@/pages/AboutMe";
import DesignProcess from "@/pages/DesignProcess";
import Home from "@/pages/Home";
import { useState } from "react";

const App = () => {
  const [colour, setColour] = useState<string>("black");

  const handleFooterColour = (): any => {
    setColour("#181823");
  };

  const handleHomeFooter = (): any => {
    setColour("black");
  };

  return (
    <Router>
      <Box bg='#000000'>
        <Navbar onLinkClick={handleFooterColour} onHomeClick={handleHomeFooter} />

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/process' element={<DesignProcess />} />

          <Route path='/about' element={<AboutMe />} />
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
