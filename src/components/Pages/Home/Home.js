import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <section className="hero-section">
        <picture>
          <source srcset="/Kirchhayn-Autoparts/images/Home/Hero-BG.png" type="image/jpeg" media="(min-width: 750px)"/>
          <img className="background" src="/Kirchhayn-Autoparts/images/Home/Hero-BG-500px.jpg" alt=""/>
        </picture>
        <div className="content padding-inline">
          <h1>Get the Best Auto Parts</h1>
          <Link className="button red-btn">Contact Us</Link>
          <Link className="button yellow-btn">Used Car Listings</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
