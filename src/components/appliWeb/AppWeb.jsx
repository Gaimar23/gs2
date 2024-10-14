import React from "react";
import "./AppWeb.scss";
import rexHome from "../../assets/images/Excel.png";
import ac from "../../assets/images/Excel2.png";
import awsd from "../../assets/images/Excel3.png";

const AppWeb = () => {
  return (
    <div className="app-web">
      <div className="app-web-container">
        <h2>Appli Web & Mobiles</h2>
        <p>
          Quelques Applications Web et mobiles conçues pour des clients et
          disponibles en ligne.
        </p>
        <div className="slide-container">
          <div className="slide-track">
            <a href="https://66f9d93434361b814a0114be--peppy-lollipop-967e71.netlify.app/">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="https://afrique-awsd.org/">
              <img src={awsd} alt="" className="slide-image" />
            </a>
            <a href="https://eloquent-salamander-f61ed0.netlify.app/programs">
              <img src={ac} alt="" className="slide-image" />
            </a>
          </div>
          <div className="slide-track">
            <a href="https://66f9d93434361b814a0114be--peppy-lollipop-967e71.netlify.app/">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="https://afrique-awsd.org/">
              <img src={awsd} alt="" className="slide-image" />
            </a>
            <a href="https://eloquent-salamander-f61ed0.netlify.app/programs">
              <img src={ac} alt="" className="slide-image" />
            </a>
          </div>
        </div>
        <div className="slide-container2">
          <div className="slide-track">
            <a href="https://66f9d93434361b814a0114be--peppy-lollipop-967e71.netlify.app/">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="https://afrique-awsd.org/">
              <img src={awsd} alt="" className="slide-image" />
            </a>
            <a href="https://eloquent-salamander-f61ed0.netlify.app/programs">
              <img src={ac} alt="" className="slide-image" />
            </a>
          </div>
          <div className="slide-track">
            <a href="https://66f9d93434361b814a0114be--peppy-lollipop-967e71.netlify.app/">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="https://afrique-awsd.org/">
              <img src={awsd} alt="" className="slide-image" />
            </a>
            <a href="https://eloquent-salamander-f61ed0.netlify.app/programs">
              <img src={ac} alt="" className="slide-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWeb;
