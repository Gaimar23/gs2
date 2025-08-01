import React, { useContext, useEffect } from "react";
import "./Projets.scss";
import Navbar from "../../components/navbar/Navbar";
import Welcome from "../../components/welcome/Welcome";
import Footer02 from "../../components/footer02/Footer02";
import AppWeb from "../../components/appliWeb/AppWeb";
import AppExcel from "../../components/appExcel/AppExcel";
import { DataContext } from "../../autres/context/DataContext";

const Projets = () => {
  const { activeLink, setActiveLink } = useContext(DataContext);

  useEffect(() => {
    if (activeLink !== "projets") {
      setActiveLink("projets");
    }
  }, []);

  return (
    <div className="projets">
      <Navbar />
      <Welcome
        text="Quelque uns des projets réalisés & encours"
        details="Nous combinons l'Ingéniosité et la Technologie pour répondre à vos besoins, pour vous délivrer la solution optimale pour votre business"
      />
      <div className="section-app-web">
        <div className="app-web-mobile">
          <AppWeb />
        </div>
      </div>
      <div className="section-app-excel">
        <div className="app-excel-vba">
          <AppExcel />
        </div>
      </div>
      <Footer02 />
    </div>
  );
};

export default Projets;
