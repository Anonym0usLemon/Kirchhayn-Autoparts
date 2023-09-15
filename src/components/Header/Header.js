import { useState } from "react";
import { Link } from "react-router-dom";

// Component Imports
import MobileLogo from "../Misc/MobileLogo";
import DesktopLogo from "../Misc/DesktopLogo";
import ContactUs from "./ContactUs";
import phone from "../../assets/svgs/phone.svg"

function Header() {

    const [openNav, setOpenNav] = useState(false); 

    const handleNavToggle = () => {
        setOpenNav(!openNav);
    };

    return (
        <header className="Header">
            <div className="mobile-top-content">
                <MobileLogo/>
                <div className="right-content">
                    <img className="phone-icon" src={phone} alt=""/>
                    <button className={`nav_toggle ${openNav ? 'hamburger-cooked' : ''}`} onClick={handleNavToggle}>
                        <span className="hamburger"></span>
                    </button>
                </div>
            </div>

            <DesktopLogo/>

            <nav className={`nav ${openNav ? 'open-nav' : ''}`}>
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/used-parts">Search Used Car Parts</Link></li> 
                    <li className="nav-item"><Link to="/used-cars">Search Used Cars</Link></li>
                    <li className="nav-item"><Link to="">Sell Your Car</Link></li>
                    <li className="has-dropdown nav-item">
                        <a>Resources</a>
                        <input type="checkbox" id="submenu-checkbox"/>
                        <label className="dropdown-label" for="submenu-checkbox">
                            <img src="/Kirchhayn-Autoparts/images/Home/Dropdown-Arrow.png" alt=""/>
                        </label>

                        <ul className="dropdown">
                            <li><a>Category1</a></li>
                            <li><a>Category2</a></li>
                            <li><a>Category3</a></li>
                        </ul>
                    </li>
                    <li className="nav-item move-up"><Link to="/contact">Contact Us</Link></li>
                </ul>
                <ContactUs/>
            </nav>
        </header>
    );
}

export default Header;
