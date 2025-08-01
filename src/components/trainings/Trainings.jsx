import React, { useContext } from "react";
import "./Trainings.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Training1 from "../../assets/images/logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataContext } from "../../autres/context/DataContext";

const Trainings = () => {
  const { trainingList } = useContext(DataContext);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="trainings">
      <div className="trainings-container">
        <span className="point-animate"></span>
        <h2>Formations</h2>
        <p>
          Nos différentes formations sont conçues pour vous permettre de libérer
          votre potentiel que vous soyez un analyste, financier, développeur ...
          Vous n'êtes plus qu'à un pas...
          {/* Nos différentes formations sur divers sujetsNos différentes formations
          sur divers sujets Nos différentes formations sur divers sujets */}
        </p>

        <div className="slider-container">
          <Slider {...settings} className="trainings-slider">
            {trainingList.map((course, index) => {
              return (
                <div className="item" key={index}>
                  <div className="item-container">
                    <img src={course.image} alt="" />
                    {/* <h5>{course.title} </h5>
                    <strong>{course.desc}</strong> */}
                    <a
                      // href={"https://wa.me/237620232111?text" + course.whatsapp}
                      href={
                        "https://wa.me/237673758734?text=" + course.whatsapp
                      }
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <button className="souscrire">Souscrire</button>
                    </a>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
