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

const Formations = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
      <section className="welcome">
        <div className="welcom-container">
          <div className="hero">
            <div className="hero-container">
              <div className="first">
                <h1>Des formations taillées pour vos besoins</h1>
                <p className="details">
                  Nous combinons l'Ingéniosité et la Technologie pour répondre à
                  vos besoins, pour vous délivrer la solution optimale pour
                  votre business.
                </p>
                <div className="sevices-container">
                  <div className="list-services">
                    <div className="article">
                      <TiTick className="article-icon" />
                      <span>Microsoft Excel</span>
                    </div>
                    <div className="article">
                      <TiTick className="article-icon" />
                      <span>Dévéloppement Web</span>
                    </div>
                    <div className="article">
                      <TiTick className="article-icon" />
                      <span>Dévéloppement d'Application Mobile</span>
                    </div>
                    <div className="article">
                      <TiTick className="article-icon" />
                      <span>Automatisation avec Excel VBA</span>
                    </div>
                  </div>
                  <div className="counter">
                    <div className="percent">
                      <svg>
                        <circle cx="105" cy="105" r="50"></circle>
                        <circle
                          cx="105"
                          cy="105"
                          r="50"
                          style={{ "--percent": 90 }}
                        ></circle>
                      </svg>
                      <div className="number">
                        <h3>
                          90<span>%</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="action">
                  Let's talk
                  <BsArrowRightCircle />
                </button>
              </div>
              <div className="second">
                {/* <Spline
                  scene="https://prod.spline.design/9Z9ona8CvpzrCS20/scene.splinecode"
                  className="planet"
                /> */}
                <div className="tablette">
                  <div className="sub-container">
                    <img src={heroImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      <h5>{training.title}</h5>
                      <strong className="details">{training.desc}</strong>
                      <button className="souscrire">Souscrire</button>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
      <Footer02 />
      <div className="whatsapp-container">
        <a href="https://wa.me/237620232111" style={{ color: "white" }}>
          <div className="sub-container">
            <BsWhatsapp className="whatsapp-icon" />
            <span style={{ fontSize: "15px" }}>Discutons</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Formations;
