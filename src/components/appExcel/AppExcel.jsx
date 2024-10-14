import React from "react";
import "./AppExcel.scss";
import vba1 from "../../assets/images/Excel4.png";
import vba2 from "../../assets/images/Excel5.png";
import vba3 from "../../assets/images/Excel6.png";

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
              <a href="https://youtu.be/u9akHj_kP2U?si=XcAC1HoMi2_slzxL">
                <img src={vba1} alt="" className="slide-image" />
              </a>
              <a href="https://youtu.be/ZklG6SC05Cg?si=9HppQocBQ0DOt-3S">
                <img src={vba2} alt="" className="slide-image" />
              </a>
              <a href="https://youtu.be/Cp5ZCQuQLPc?si=1fyJRLBuzsCg267l">
                <img src={vba3} alt="" className="slide-image" />
              </a>
            </div>
            <div className="slide-track">
              <a href="https://youtu.be/u9akHj_kP2U?si=XcAC1HoMi2_slzxL">
                <img src={vba1} alt="" className="slide-image" />
              </a>
              <a href="https://youtu.be/ZklG6SC05Cg?si=9HppQocBQ0DOt-3S">
                <img src={vba2} alt="" className="slide-image" />
              </a>
              <a href="https://youtu.be/Cp5ZCQuQLPc?si=1fyJRLBuzsCg267l">
                <img src={vba3} alt="" className="slide-image" />
              </a>
            </div>
          </div>
          <div className="slide-container2">
            <div className="slide-track">
              <a href="https://youtu.be/u9akHj_kP2U?si=XcAC1HoMi2_slzxL">
                <img src={vba1} alt="" className="slide-image" />
              </a>
              <a href="https://youtu.be/ZklG6SC05Cg?si=9HppQocBQ0DOt-3S">
                <img src={vba2} alt="" className="slide-image" />
              </a>
              <a href="https://youtu.be/Cp5ZCQuQLPc?si=1fyJRLBuzsCg267l">
                <img src={vba3} alt="" className="slide-image" />
              </a>
            </div>
            <div className="slide-track">
              <a href="https://youtu.be/u9akHj_kP2U?si=XcAC1HoMi2_slzxL">
                <img src={vba1} alt="" className="slide-image" />
              </a>
              <a href="https://youtu.be/ZklG6SC05Cg?si=9HppQocBQ0DOt-3S">
                <img src={vba2} alt="" className="slide-image" />
              </a>
              <a href="https://youtu.be/Cp5ZCQuQLPc?si=1fyJRLBuzsCg267l">
                <img src={vba3} alt="" className="slide-image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppExcel;
