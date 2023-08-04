import Feedback from "@/components/home/Feedback";
import Herosection from "@/components/home/Herosection";
import IconStack from "@/components/home/IconStack";
import Jobs from "@/components/home/Jobs";
import Process from "@/components/process/Process";
import Reach from "@/components/home/Reach";

const Home = ({ onLinkClick }: { onLinkClick(): any }) => {
  return (
    <>
      <Herosection />
      <Process />
      {/* <IconStack /> */}
      <Jobs onLinkClick={onLinkClick} />
      <Feedback />
      <Reach />
    </>
  );
};

export default Home;
