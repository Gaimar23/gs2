import React from "react";
import "./Projets.scss";
import Navbar from "../../components/navbar/Navbar";
import Welcome from "../../components/welcome/Welcome";
import Footer02 from "../../components/footer02/Footer02";

const Projets = () => {
  return (
    <div className="projets">
      <Navbar />
      <Welcome
        text="Quelque uns des projets réalisés & encours"
        details="Nous combinons l'Ingéniosité et la Technologie pour répondre à vos besoins, pour vous délivrer la solution optimale pour votre business"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Encours de design
      </div>
      <Footer02 />
    </div>
  );
};

export default Projets;
