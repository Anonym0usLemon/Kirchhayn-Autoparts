/**
 * Contact form link 
 * includes phone icon and contact info
 */
import { Link } from "react-router-dom";
import "./ContactUs.scss"; 

const ContactUs = () => {
  return (
    <Link className="phone-info hover-animation">
      <img src="/Kirchhayn-Autoparts/images/Home/phone-icon.png" alt="" />

      <div className="text">
        <p>Call Us Today!</p>
        <span>555 555 5555</span>
      </div>
    </Link>
  );
};

export default ContactUs;