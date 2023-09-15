/**
 *  This is the CarList component. It accepts a list of data and displays it
 * on the used vehicles page.
 *
 */
import CarTile from "./CarTile";
import cars from "./data";
import "./CarList.scss"; 


function CarList() {

  return (
    <div className="car-tile-container">
      {/* use .map to pull in data from .json file and display car-tile components onto the page */}
      {cars.map((car) => (
        <CarTile
          key={car.id}
          image={car.image}
          year={car.year}
          make={car.make}
          model={car.model}
          price={car.price}
          mileage={car.mileage}
          transmission={car.transmission}
        />
      ))}
    </div>
  );
}

export default CarList;
