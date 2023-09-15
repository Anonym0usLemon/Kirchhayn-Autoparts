import { Link } from "react-router-dom"; 
import DesktopLogo from "../Misc/DesktopLogo";
import phone from "../../assets/svgs/yellow-phone.svg"
import pin from "../../assets/svgs/map-icon.svg"

function Footer() {
    return (
        <footer>
            <div className="desktop-container">
                <div className="logo-container">
                    <img className="hover-animation" src="/Kirchhayn-Autoparts/images/Home/logo.png" alt=""/>
                </div>
                <div className="desktop-wrapper">
                    <div className="desktop-info">
                        <div className="contact-container">
                            <p className="title">Contact Us</p>
                            <div className="info-container">
                                <img src={phone} alt=""/>
                                <div className="info">
                                    <p className="number">555 555 5555</p>
                                    <p className="align-end">Mon - Fri: 8:00 - 5:00 <br/>Sat: 9:00 - 1:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="address-container">
                            <img src={pin} alt=""/>
                            <div className="info">
                                <p className="title">Address</p>
                                <p className="align-end">W4726 County Road A <br/> Fredonia, WI 53021</p>
                            </div>
                        </div>
                    </div>
                    <div className="our-services">
                        <p>Our Services</p>
                        <Link>Search Used Car Parts</Link>
                        <Link>Search Used Cars</Link>
                        <Link>Sell Your Car</Link>
                        <Link>Contact Us</Link>
                    </div>
                    <div className="resources">
                        <p>Resouces</p>
                        <Link>Cut Sheets</Link>
                        <Link>Warranty</Link>
                        <Link>Testimonials</Link>
                        <Link className="yellow">Donate</Link>
                    </div>
                </div>
            </div>
            <div className="desktop-cards padding-inline">
                <img className="credit-cards" src="/Kirchhayn-Autoparts/images/Home/Credit-Cards.png" alt="" />
                <p className="credits">Developed By - Dominic DiModugno</p>
            </div>
        </footer>
    );
}

export default Footer;