import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Reach from "@/components/Reach";
import Works from "@/components/Works";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <Process />
      <Works />
      <Feedback />
      <Reach />
      <Footer />
    </>
  );
};

export default Home;
