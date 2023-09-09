/**
 * Button component
 * 
 * Accepts props: 
 * - link 
 * - color
 * - text
 * 
 */

import { Link } from "react-router-dom"
import "./Button.scss"; 

const Button = (props) => {
    return (
        <Link to={props.link} className={`button ${props.color}`}>{props.text}</Link>
    );
}

export default Button;