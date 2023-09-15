/**
 * Car Tile Component
 * 
 * Accepts props:
 * - key
 * - image
 * - year
 * - make 
 * - model
 * - price
 * - mileage
 * - trasmission
 *  
 */
import "./CarTile.scss";

const CarTile = (props) => {
  return (
    <div key={props.id} className="car-tile hover-animation">
      <div className="make-image-fit-peas">
        <img
          className="car-photo"
          src={`/Kirchhayn-Autoparts/images/Home/${props.image}`}
          alt=""
        />
      </div>

      <div className="car-info">
        <span className="year">{props.year}</span>
        <span className="make-model">{props.make + " " + props.model}</span>
        <span className="price">
          ${new Intl.NumberFormat("en-US").format(props.price)}
        </span>
      </div>

      <div className="car-stats">
        <div className="mileage">
          <img src="/Kirchhayn-Autoparts/images/Home/speedometer.png" alt="" />
          <p>{new Intl.NumberFormat("en-US").format(props.mileage)}</p>
        </div>

        <div className="transmission">
          <img src="/Kirchhayn-Autoparts/images/Home/transmission.png" alt="" />
          <p>{props.transmission}</p>
        </div>
      </div>

      <a className="details-link">Full Details</a>
    </div>
  );
};

export default CarTile;
