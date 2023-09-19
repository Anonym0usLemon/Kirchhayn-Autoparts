import Button from "../../../Misc/Button";
import Description from "./Description";
import Image from "./Image"; 
import "./PartsSection.scss"; 

const PartsSection = () => {
    return (
        <section className="parts-section padding-inline">
            <Image/>
            <div className="content">
                <Description/>
                <div className="buttons">
                    <Button color="yellow-btn" text="Contact Us" link="/contact"/>
                    <Button color="red-btn" text="Used Car Listings" link="/used-cars"/>
                </div>
            </div>
        </section>
    );
}

export default PartsSection; 