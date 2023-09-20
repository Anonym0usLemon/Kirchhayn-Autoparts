/**
 * A component for each review tile to allow google review content to be displayed and styled accordingly
 * 
 * Accepts Props: 
 * - Name
 * - Star Rating
 * - Description 
 * 
 */
const Review = (props) => {

    return (
        <div className="review">
            <h3>{props.name}</h3>
            <img src={props.stars} alt=""/>
            <p>{props.description}</p>
        </div>
    )
}

export default Review; 