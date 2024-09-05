import React from "react";
import heroImg from "../../assets/images/bgHead.png";
import { TiTick } from "react-icons/ti";
import { BsArrowRightCircle } from "react-icons/bs";
import "./Welcome.scss";
import video01 from "../../assets/videos/Tiers1920.mp4";

const Welcome = ({ text }) => {
  return (
    <section className="welcome">
      <div className="welcom-container">
        <div className="hero">
          <div className="hero-container">
            <div className="first">
              <h1>{text}</h1>
              {/* <h1>
              {"Hi "} <span className="wrap">{text}</span>{" "}
            </h1> */}
              <p className="details">
                Nous combinons l'Ingéniosité et la Technologie pour répondre à
                vos besoins, pour vous délivrer la solution optimale pour votre
                business.
              </p>
              <div className="sevices-container">
                <div className="list-services">
                  <div className="article">
                    <TiTick className="article-icon" />
                    <span>Formations</span>
                  </div>
                  <div className="article">
                    <TiTick className="article-icon" />
                    <span>Conception de site Web</span>
                  </div>
                  <div className="article">
                    <TiTick className="article-icon" />
                    <span>Conception d'Application Mobile</span>
                  </div>
                  <div className="article">
                    <TiTick className="article-icon" />
                    <span>Application Excel VBA</span>
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
                  <video loop autoPlay muted>
                    <source src={video01} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
