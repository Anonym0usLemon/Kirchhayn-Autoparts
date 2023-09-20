import "./Testimonials.scss"; 
import Button from "../../../Misc/Button";
import ReviewsSlider from "./ReviewsSlider";

/**
 * TO DOs
 * + Might want to use this section on other pages... same styling and pulling in content dynamically? 
 * + 
 * 
 */

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="title">
                <h2 className="padding-inline"><span>Why Choose Kirchhayn</span>Customer Testimonials</h2>
            </div>
            <div className="tire-marks">
                <img className="left" src="/Kirchhayn-Autoparts/images/Home/left-tire-marks.png" alt=""/>
                <img className="right" src="/Kirchhayn-Autoparts/images/Home/right-tire-marks.png" alt=""/>
            </div>
            <ReviewsSlider/>
        </section>
    );
}

export default Testimonials;