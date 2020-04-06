import React from "react";
import Slider from "react-slick";
import "./ImageGallery.css";

const ImageCarousel = ({ productData, handleClick }) => {
  //React Slick arrow functions
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black"
        }}
        onClick={onClick}
      />
    );
  }

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black"
        }}
        onClick={onClick}
      />
    );
  }

  //React Slick settings
  const settings = {
    dots: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {productData.map((img, index) => {
          return (
            <div className="setImageHeight" key={index}>
              <img src={img.url} onClick={handleClick} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
