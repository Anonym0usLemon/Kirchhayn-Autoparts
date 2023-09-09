/**
 * Logo component to be used on mobile view
 *
 */
import { Link } from "react-router-dom" ;
import "./MobileLogo.scss"; 


const MobileLogo = () => {
  return (
    <Link to="/Kirchhayn-Autoparts">
      <img className="mobile-logo" src="/Kirchhayn-Autoparts/images/Home/mobile-logo.png" alt="" />
    </Link>
  );
};

export default MobileLogo;
