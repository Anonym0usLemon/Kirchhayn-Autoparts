import { Link } from "react-router-dom";
import "./Content.scss";
import Button from "../../../Misc/Button";

const Content = () => {
  return (
    <div className="hero-content padding-inline">
      <h1>Get the Best Auto Parts</h1>
      <img className="desktop-header" src="/Kirchhayn-Autoparts/images/Home/h1-title.png" alt=""/> 
      <div className="button-container">
        <Button link="/contact" color="red-btn" text="Contact Us"/> 
        <Button link="/" color="yellow-btn" text="Used Car Listings"/>
      </div>
    </div>
  );
};

export default Content;
