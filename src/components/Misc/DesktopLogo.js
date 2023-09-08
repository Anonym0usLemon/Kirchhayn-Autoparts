/**
 * Logo component to be used on desktop view.
 *
 */

import { Link } from "react-router-dom"
import "./DesktopLogo.scss"; 

const DesktopLogo = () => {
  return (
    <Link to="/" className="desktop-logo-link">
      <img
        className="desktop-logo"
        src="/Kirchhayn-Autoparts/images/Home/logo.png"
        alt=""
      />
    </Link>
  );
};

export default DesktopLogo;
