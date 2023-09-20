import Slider from "react-slick";
import reviewData from "./data";
import Review from "./Review";
import "./ReviewSlider.scss"; 
import Button from "../../../Misc/Button";

const ReviewsSlider = () => {
  var settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,      
        },
      },
    ],
  };

  return (
    <div className="reviews-slider padding-inline">
      <Slider {...settings}>
        {reviewData.map((review) => (
          <div className="review-container">
              <Review
                key={review.id}
                name={review.name}
                stars={review.stars}
                description={review.description.slice(0, 88)}
              />
          </div>
        ))}
      </Slider>
      <Button color="red-btn reviews-btn" text="Testimonials" link=""/>
    </div>
  );
};

export default ReviewsSlider;
