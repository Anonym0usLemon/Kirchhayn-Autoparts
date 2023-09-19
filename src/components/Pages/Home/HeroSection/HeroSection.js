import Background from "./Background";
import Content from "./Content";

import "./HeroSection.scss";

const HeroSection = () => {
  return (
      <section className="hero-section">
        <Background/>
        <Content/>
      </section>
  );
};

export default HeroSection;