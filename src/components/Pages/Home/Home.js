import Featured from "./Featured/Featured";
import HeroSection from "./HeroSection/HeroSection";
import PartsSection from "./PartsSection/PartsSection";
import UsedCarSection from "./UsedCarSection/UsedCarSection";
import "./Home.scss"; 


const Home = () => {
  return (
      <div className="Home">
        <HeroSection/>
        <Featured/>
        <UsedCarSection/>
        <PartsSection/>
      </div>
  );
};

export default Home;
