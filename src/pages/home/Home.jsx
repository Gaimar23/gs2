import React, { useEffect, useState } from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Trainings from "../../components/trainings/Trainings";
import Projects from "../../components/projects/Projects";
import heroImg from "../../assets/images/bgHead.png";
import counterImg from "../../assets/images/99.png";
import { BsArrowRightCircle } from "react-icons/bs";
import AboutUs from "../../components/about/AboutUs";
import ContactComp from "../../components/contact/contactComp";
import { TiTick } from "react-icons/ti";
import Spline from "@splinetool/react-spline";
import { BsWhatsapp } from "react-icons/bs";
import Footer02 from "../../components/footer02/Footer02";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Design Freelancer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.ceil() * 100);
  const period = 2000;

  useEffect(() => {
    let stepIn = setInterval(() => {
      move();
    }, delta);

    return () => {
      clearInterval(stepIn);
    };
  }, [text]);

  const move = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="home">
      <Navbar />
      <section className="welcome">
        <div className="welcom-container">
          <div className="hero">
            <div className="hero-container">
              <div className="first">
                <h1>Des solutions taillées pour vos besoins</h1>
                {/* <h1>
                  {"Hi "} <span className="wrap">{text}</span>{" "}
                </h1> */}
                <p className="details">
                  Nous combinons l'Ingéniosité et la Technologie pour répondre à
                  vos besoins, pour vous délivrer la solution optimale pour
                  votre business.
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
          <Trainings />
        </div>
      </section>
      <section className="projets-section">
        <div className="projects-container">
          <Projects />
        </div>
      </section>

      <section className="about-us">
        <div className="about-us-container">
          <AboutUs />
        </div>
      </section>
      <section className="contact-us">
        <div className="contact-us-container">
          <ContactComp />
        </div>
      </section>
      {/* <Footer /> */}
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

export default Home;
