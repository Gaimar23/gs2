import React, { useEffect, useState } from "react";
import "./Services.scss";
import Navbar from "../../components/navbar/Navbar";
import Welcome from "../../components/welcome/Welcome";
import service01 from "../../assets/images/project6.png";
// import service01 from "../../assets/images/project1.png";
import service02 from "../../assets/images/project4.png";
import service03 from "../../assets/images/project5.png";
import { MdOutlineSecurity } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { FaPersonRunning } from "react-icons/fa6";
import { TbStackForward } from "react-icons/tb";
import { IoChevronDownSharp } from "react-icons/io5";
import Footer02 from "../../components/footer02/Footer02";
import WhatSapp from "../../components/whatSapp/WhatSapp";

const Services = () => {
  const [aWebsite, setAWebsite] = useState("");
  const [mobileApp, setMobileApp] = useState("");
  const [excelApp, setExcelApp] = useState("");

  useEffect(() => {
    setAWebsite(document.getElementById("a-website"));
    setMobileApp(document.getElementById("mobile-app"));
    setExcelApp(document.getElementById("excel-app"));
  }, []);

  const handleWebsite = () => {
    aWebsite.parentElement.classList.contains("open")
      ? aWebsite.parentElement.classList.remove("open")
      : aWebsite.parentElement.classList.add("open");
  };
  const handleMobile = () => {
    mobileApp.parentElement.classList.contains("open")
      ? mobileApp.parentElement.classList.remove("open")
      : mobileApp.parentElement.classList.add("open");
  };
  const handleExcel = () => {
    excelApp.parentElement.classList.contains("open")
      ? excelApp.parentElement.classList.remove("open")
      : excelApp.parentElement.classList.add("open");
  };

  return (
    <div className="services">
      <Navbar />
      <Welcome text="Des services taillées pour vos besoins" />
      <div className="our-services">
        <div className="services-container">
          <div className="item">
            <div className="top" id="a-website" onClick={handleWebsite}>
              <div className="image-container">
                <img src={service01} alt="" className="service-image" />
              </div>
              <h5 className="title">Conception d'un Site Web</h5>
              <button
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span>Commander</span>
                <IoChevronDownSharp size={20} />
              </button>
            </div>
            <div className="bottom">
              <h5>Conception d'un Site Web</h5>
              <div className="details">
                <div className="left">
                  <p className="one">
                    Pour vous délivrer des solutions qui réflectent votre besoin
                    et s'intégrent à votre stratégie, Nous récourrons aux
                    technologies les plus récentes.
                  </p>
                  <p className="two">
                    Qu'il s'agisse d'un site statique ou dynamique, notre équipe
                    d'expert doté de plusieurs années d'expérience s'atèle à la
                    tâche pour vous offrir la meilleure des solution Web dans
                    les temps impartis
                  </p>
                </div>
                <div className="right">
                  <div className="options-container">
                    <p>Un site Web </p>
                    <div className="options">
                      <div className="option">
                        <span>Performant</span>{" "}
                        <CgPerformance className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Rapide</span>
                        <FaPersonRunning className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Sécurisé</span>
                        <MdOutlineSecurity className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Evolutif</span>
                        <TbStackForward className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Performant</span>{" "}
                        <CgPerformance className="option-icon" />
                      </div>
                    </div>
                  </div>
                  {/* <p>
                    Nous vous rémercions par avance de la confiance que vous
                    nous témoignez en nous confiant votre projet.
                  </p> */}
                  <div className="btn-container">
                    <a
                      href="https://wa.me/237620232111"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <button className="order-btn">Commander</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="top" id="mobile-app" onClick={handleMobile}>
              <div className="image-container">
                <img src={service02} alt="" className="service-image" />
              </div>
              <h5 className="title">Conception d'Appli Mobile</h5>
              <button
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span>Commander</span>
                <IoChevronDownSharp size={20} />
              </button>
            </div>
            <div className="bottom">
              <h5>Conception d'Appli Mobile</h5>
              <div className="details">
                <div className="left">
                  <p className="one">
                    Pour vous délivrer des solutions qui réflectent votre besoin
                    et s'intégrent à votre stratégie, Nous récourrons aux
                    technologies les plus récentes.
                  </p>
                  <p className="two">
                    Qu'il s'agisse d'un site statique ou dynamique, notre équipe
                    d'expert doté de plusieurs années d'expérience s'atèle à la
                    tâche pour vous offrir la meilleure des solution Web dans
                    les temps impartis
                  </p>
                </div>
                <div className="right">
                  <div className="options-container">
                    <p>Une Appli Mobile</p>
                    <div className="options">
                      <div className="option">
                        <span>Performant</span>{" "}
                        <CgPerformance className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Rapide</span>
                        <FaPersonRunning className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Sécurisé</span>
                        <MdOutlineSecurity className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Evolutif</span>
                        <TbStackForward className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Performant</span>{" "}
                        <CgPerformance className="option-icon" />
                      </div>
                    </div>
                  </div>
                  {/* <p>
                    Nous vous rémercions par avance de la confiance que vous
                    nous témoignez en nous confiant votre projet.
                  </p> */}
                  <div className="btn-container">
                    <a
                      href="https://wa.me/237620232111"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <button className="order-btn">Commander</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="top" id="excel-app" onClick={handleExcel}>
              <div className="image-container">
                <img src={service03} alt="" className="service-image" />
              </div>
              <h5 className="title">Conception d'Appli Excel VBA</h5>
              <button
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span>Commander</span>
                <IoChevronDownSharp size={20} />
              </button>
            </div>
            <div className="bottom">
              <h5>Conception d'Appli Excel VBA</h5>
              <div className="details">
                <div className="left">
                  <p className="one">
                    Pour vous délivrer des solutions qui réflectent votre besoin
                    et s'intégrent à votre stratégie, Nous récourrons aux
                    technologies les plus récentes.
                  </p>
                  <p className="two">
                    Quelque soit les processus ou tâches que vous aimeriez
                    automatiser sur Excel, notre équipe d'expert s'atèle à la
                    tâche pour vous offrir la meilleure des solutions, vous
                    offrant ainsi la meilleure des expériences dans le
                    management de votre business.
                  </p>
                </div>
                <div className="right">
                  <div className="options-container">
                    <p>Une Appli Excel</p>
                    <div className="options">
                      <div className="option">
                        <span>Performant</span>{" "}
                        <CgPerformance className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Rapide</span>
                        <FaPersonRunning className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Sécurisé</span>
                        <MdOutlineSecurity className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Evolutif</span>
                        <TbStackForward className="option-icon" />
                      </div>
                      <div className="option">
                        <span>Performant</span>{" "}
                        <CgPerformance className="option-icon" />
                      </div>
                    </div>
                  </div>
                  {/* <p>
                    Nous vous rémercions par avance de la confiance que vous
                    nous témoignez en nous confiant votre projet.
                  </p> */}
                  <div className="btn-container">
                    <a
                      href="https://wa.me/237620232111"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <button className="order-btn">Commander</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer02 />
      <WhatSapp />
    </div>
  );
};

export default Services;
