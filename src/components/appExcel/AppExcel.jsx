import React from "react";
import "./AppExcel.scss";
import rexHome from "../../assets/images/Excel.png";

const AppExcel = () => {
  return (
    <div className="app-excel">
      <div className="app-excel-container">
        <h2>Appli Excel VBA</h2>
        <p>
          Quelques Applications Excel VBA conçues pour des clients et disponible
          en vidéo sur youtube.
        </p>

        <div className="animation-container">
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
    </div>
  );
};

export default AppExcel;
