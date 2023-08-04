import { useState } from "react";

function Header() {

    const [openNav, setOpenNav] = useState(false); 

    const handleNavToggle = () => {
        setOpenNav(!openNav);
    };

    return (
        <header className="Header">
            <div className="top-content">
                <img className="mobile-logo" src="./images/Home/Mobile_Kirchhayn_Logo.png" alt=""/>
                <div className="right-content">
                    <img className="phone-icon" src="./images/Home/phone-icon.png" alt=""/>
                    <button className={`nav_toggle ${openNav ? 'hamburger-cooked' : ''}`} onClick={handleNavToggle}>
                        <span className="hamburger"></span>
                    </button>
                </div>
            </div>

            <nav className={`nav ${openNav ? 'open-nav' : ''}`}>
                <ul className="nav-list">
                    <li className="nav-item">Search Used Car Parts</li> 
                    <li className="nav-item">Search Used Cars</li>
                    <li className="nav-item">Sell Your Car</li>
                    <li className="has-dropdown nav-item">
                        <a>Resources</a>
                        <input type="checkbox" id="submenu-checkbox"/>
                        <label className="dropdown-label" for="submenu-checkbox">
                            <img src="./images/Home/Dropdown-Arrow.png" alt=""/>
                        </label>

                        <ul className="dropdown">
                            <li>Category1</li>
                            <li>Category2</li>
                            <li>Category3</li>
                        </ul>
                    </li>
                    <li className="nav-item">Contact Us</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
