import Description from "./Description";
import Image from "./Image"; 
import "./PartsSection.scss"; 

const PartsSection = () => {
    return (
        <section className="parts-section padding-inline">
            <Image/>
            <Description/>
        </section>
    );
}

export default PartsSection; 