import React from "react";
import "./AppWeb.scss";
import rexHome from "../../assets/images/Excel.png";

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
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
          </div>
          <div className="slide-track">
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
          </div>
        </div>
        <div className="slide-container2">
          <div className="slide-track">
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
          </div>
          <div className="slide-track">
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
            <a href="">
              <img src={rexHome} alt="" className="slide-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWeb;
