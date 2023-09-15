/**
 * Contact form link 
 * includes phone icon and contact info
 */
import { Link } from "react-router-dom";
import "./ContactUs.scss"; 
import phone from "../../assets/svgs/phone.svg"

const ContactUs = () => {
  return (
    <Link className="phone-info hover-animation">
      <img style={{ fill: "#771c2e"}} src={phone} alt="" />
      <div className="text">
        <p>Call Us Today!</p>
        <span>555 555 5555</span>
      </div>
    </Link>
  );
};

export default ContactUs;