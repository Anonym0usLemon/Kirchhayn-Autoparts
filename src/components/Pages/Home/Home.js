import Featured from "./Featured/Featured";
import HeroSection from "./HeroSection/HeroSection";
import PartsSection from "./PartsSection/PartsSection";
import UsedCarSection from "./UsedCarSection/UsedCarSection";
import Testimonials from "./Testimonials/Testimonials";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <HeroSection />
      <Featured />
      <UsedCarSection />
      <PartsSection />
      <Testimonials />
      <div className="finish-line-stencil">
        <img className="finish-line" src="/Kirchhayn-Autoparts/images/Home/finish-line.png" alt=""/>
      </div>
      <section className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11615.93480670028!2d-88.0976638!3d43.293663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79a4132dde8d5259!2sKirchhayn%20Auto%20Salvage!5e0!3m2!1sen!2sus!4v1634756961721!5m2!1sen!2sus" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
      </section>
    </div>
  );
};

export default Home;
