import React, { useContext } from "react";
import "./Formations.scss";
import Navbar from "../../components/navbar/Navbar";
import { TiTick } from "react-icons/ti";
import { BsArrowRightCircle } from "react-icons/bs";
import heroImg from "../../assets/images/bgHead.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer02 from "../../components/footer02/Footer02";
import { DataContext } from "../../autres/context/DataContext";
import { BsWhatsapp } from "react-icons/bs";
import Welcome from "../../components/welcome/Welcome";
import WhatSapp from "../../components/whatSapp/WhatSapp";

const Formations = () => {
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

  const { trainingList } = useContext(DataContext);

  return (
    <div className="formations">
      <Navbar />
      <Welcome
        text="Des formations taillées pour vos besoins"
        details="Nous vous offrons des formations qui s'adapte à votre situation particulière & à votre planning."
      />
      <section className="formations-section">
        <div className="formations-container">
          <div className="slider-container">
            {/* <div className="selected-item">
              <div className="item">
                <div className="item-container">
                  <img src={Training1} alt="" />
                  <h5>Excel</h5>
                  <strong className="details">Les Bases</strong>
                  <button className="souscrire">Souscrire</button>
                </div>
              </div>
            </div> */}
            <Slider {...settings} className="trainings-slider">
              {trainingList.map((training, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="item-container">
                      <img src={training.image} alt="" />
                      {/* <h5>{training.title}</h5>
                      <strong className="details">{training.desc}</strong> */}
                      <a
                        href="https://wa.me/237620232111"
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
      </section>
      <Footer02 />
      <WhatSapp />
    </div>
  );
};

export default Formations;
