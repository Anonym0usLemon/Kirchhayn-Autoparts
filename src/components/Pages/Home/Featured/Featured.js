import FeaturedTile from "./FeaturedTile";
import "./Featured.scss"; 

const Featured = () => {
  return (
    <section className="featured">
      <FeaturedTile
        link=""
        smallText="The Best Collection"
        title="Used Car Parts"
        titleColor="yellow"
        btnText="Parts Inventory"
        btnColor="white-btn"
        mobileImg="/Kirchhayn-Autoparts/images/Home/button1-500px.jpg"
        desktopImg="/Kirchhayn-Autoparts/images/Home/button1.jpg"
        bgColor="#000000"
      />
      <FeaturedTile
        link=""
        smallText="Vast Vehicle Selection"
        title="Buy Used Cars"
        titleColor="red"
        btnText="Used Car Listings"
        btnColor="black-btn"
        mobileImg="/Kirchhayn-Autoparts/images/Home/button2-500px.jpg"
        desktopImg="/Kirchhayn-Autoparts/images/Home/button2.jpg"
        bgColor="#FFFFFF"
      />
      <FeaturedTile
        link=""
        smallText="Simple Auto Transaction"
        title="Sell Used Cars"
        titleColor="white"
        btnText="Submit Your Vehicle"
        btnColor="white-btn"
        mobileImg="/Kirchhayn-Autoparts/images/Home/button3-500px.jpg"
        desktopImg="/Kirchhayn-Autoparts/images/Home/button3.jpg"
        bgColor="#771c2e"
      />
    </section>
  );
};

export default Featured;
