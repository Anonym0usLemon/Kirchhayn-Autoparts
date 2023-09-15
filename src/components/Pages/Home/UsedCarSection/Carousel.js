import React, { Component } from "react";
import Slider from "react-slick";
import cars from "../../SearchUsedCars/data";
import CarTile from "../../SearchUsedCars/CarTile";

import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
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
