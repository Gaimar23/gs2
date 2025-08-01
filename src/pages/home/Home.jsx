import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import Trainings from "../../components/trainings/Trainings";
import Projects from "../../components/projects/Projects";
import AboutUs from "../../components/about/AboutUs";
import ContactComp from "../../components/contact/contactComp";
import Footer02 from "../../components/footer02/Footer02";
import Welcome from "../../components/welcome/Welcome";
import WhatSapp from "../../components/whatSapp/WhatSapp";

const Home = () => {
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
