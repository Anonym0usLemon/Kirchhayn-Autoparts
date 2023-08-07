import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

    const [openNav, setOpenNav] = useState(false); 

    const handleNavToggle = () => {
        setOpenNav(!openNav);
    };

    return (
        <header className="Header">
            <div className="mobile-top-content">
                <img className="mobile-logo padding-inline" src="./images/Home/Mobile_Kirchhayn_Logo.png" alt=""/>
                <div className="right-content">
                    <img className="phone-icon" src="./images/Home/phone-icon.png" alt=""/>
                    <button className={`nav_toggle ${openNav ? 'hamburger-cooked' : ''}`} onClick={handleNavToggle}>
                        <span className="hamburger"></span>
                    </button>
                </div>
            </div>

            <img className="desktop-logo hover-animation" src="./images/Home/logo.png" alt=""/>

            <nav className={`nav ${openNav ? 'open-nav' : ''}`}>
                <ul className="nav-list">
                    <li className="nav-item"><a>Search Used Car Parts</a></li> 
                    <li className="nav-item"><Link to="/used-cars">Search Used Cars</Link></li>
                    <li className="nav-item"><a>Sell Your Car</a></li>
                    <li className="has-dropdown nav-item">
                        <a>Resources</a>
                        <input type="checkbox" id="submenu-checkbox"/>
                        <label className="dropdown-label" for="submenu-checkbox">
                            <img src="./images/Home/Dropdown-Arrow.png" alt=""/>
                        </label>

                        <ul className="dropdown">
                            <li><a>Category1</a></li>
                            <li><a>Category2</a></li>
                            <li><a>Category3</a></li>
                        </ul>
                    </li>
                    <li className="nav-item move-up"><a>Contact Us</a></li>
                </ul>
                <a className="phone-info hover-animation">
                    <img src="./images/Home/phone-icon.png" alt=""/>

                    <div className="text">
                        <p>Call Us Today!</p>
                        <span>555 555 5555</span>
                    </div> 
                </a>
            </nav>
        </header>
    );
}

export default Header;
