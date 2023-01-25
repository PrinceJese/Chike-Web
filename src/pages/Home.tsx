import Feedback from "@/components/Feedback";
import Herosection from "@/components/Herosection";
import Jobs from "@/components/Jobs";
import Process from "@/components/Process";
import Reach from "@/components/Reach";

const Home = () => {
  return (
    <>
      <Herosection />
      <Process />
      {/* <Jobs /> */}
      <Feedback />
      <Reach />
    </>
  );
};

export default Home;
