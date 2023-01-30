import Feedback from "@/components/Feedback";
import Herosection from "@/components/Herosection";
import IconStack from "@/components/IconStack";
import Jobs from "@/components/Jobs";
import Process from "@/components/Process";
import Reach from "@/components/Reach";

const Home = ({ onLinkClick }: { onLinkClick(): any }) => {
  return (
    <>
      <Herosection />
      <Process />
      <IconStack />
      <Jobs onLinkClick={onLinkClick} />
      <Feedback />
      <Reach />
    </>
  );
};

export default Home;
