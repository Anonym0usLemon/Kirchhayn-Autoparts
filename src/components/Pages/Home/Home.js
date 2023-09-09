import Featured from "./Featured/Featured";
import HeroSection from "./Hero-Section/HeroSection";
import UsedCarSection from "./UsedCarSection/UsedCarSection";

const Home = () => {
  return (
      <div className="Home">
        <HeroSection/>
        <Featured/>
        <UsedCarSection/>
      </div>
  );
};

export default Home;
