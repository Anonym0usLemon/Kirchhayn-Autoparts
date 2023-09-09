/**
 * Featured Tile Component
 * 
 * Accepts props: 
 * - link
 * - smallText
 * - title
 * - btnText - to pass to Button component
 * - btnColor - to pass to Button component
 * - mobileImg
 * - desktopImg
 * - bgColor
 * 
 */

import { Link } from "react-router-dom";
import Button from "../../../Misc/Button";
import "./FeaturedTile.scss"; 

const FeaturedTile = (props) => {
    return (
        <Link className="featured-tile hover-animation" to={props.link}>

{/* Background Image */}
            <picture>
            <source
                srcset={props.desktopImg}
                type="image/jpeg"
                media="(min-width: 800px)"
            />
            <img
                className="background"
                src={props.mobileImg}
                alt=""
            />
            </picture>

{/* Content */}
            <div className="content">
                <span>{props.smallText}</span>
                <h3 className={props.titleColor}>{props.title}</h3>
                <Button className="featured-btn" link={props.link} color={props.btnColor} text={props.btnText}/>
            </div>
        </Link>
    );
}

export default FeaturedTile; 