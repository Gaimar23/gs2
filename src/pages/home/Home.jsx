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
import Welcome from "../../components/welcome/Welcome";
import WhatSapp from "../../components/whatSapp/WhatSapp";

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
      <Welcome
        text="Des solutions taillées pour vos besoins"
        details="Nous combinons l'Ingéniosité et la Technologie pour répondre à
vos besoins, pour vous délivrer des solutions toujours plus
innovantes et adaptées à votre business model.
"
      />
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
      <Footer02 />
      <WhatSapp />
    </div>
  );
};

export default Home;
