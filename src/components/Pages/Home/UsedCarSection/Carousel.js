import Slider from "react-slick";
import cars from "../../SearchUsedCars/data";
import CarTile from "../../SearchUsedCars/CarTile";

import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 5000,          
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
    <div className="carousel padding-inline">
      <Slider {...settings}>
        {cars.map((car) => (
          <div className="tile-container">
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
