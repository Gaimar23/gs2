import React from "react";
import "./Footer02.scss";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Logo from "../../assets/images/logo03.png";

const Footer02 = () => {
  return (
    <div className="footer-02">
      <div className="footer-container">
        <div className="footer-content">
          <div className="column">
            <div className="image-container">
              <img src={Logo} alt="" className="mon-logo" />
              <h1 className="le-logo">Solutions</h1>
            </div>
            <p className="mission">
              Parce que vous créer de la valeur, nous ne faisons pas que vous
              fournir des solutions en ligne et en local pour propulser votre
              business, votre carrière, votre vision... Nous vous accompagnons
              également à chaque étape de votre développement.
            </p>
            <div className="location">
              <FaLocationDot className="icon-location" />
              <span>Douala Cameroun</span>
            </div>
          </div>
          <div className="column">
            <div className="title">Formations</div>
            <ul className="list-item-footer">
              <li>Microsoft Excel</li>
              <li>Programmation Excel VBA</li>
              <li>Dévéloppement Web</li>
              <li>Dévéloppement Mobile</li>
            </ul>
          </div>
          <div className="column">
            <div className="title">Services</div>
            <ul className="list-item-footer">
              <li>Conception de Site Web</li>
              <li>Conception d'Appli Mobile</li>
              <li>Dévéloppement d'Appli VBA</li>
            </ul>
          </div>
          <div className="column">
            <div className="title">Liens Utiles</div>
            <ul className="list-item-footer">
              <a
                href="/formations"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Formations</li>
              </a>
              <a
                href="/projets"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Projets</li>
              </a>
              <a
                href="/services"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Servives</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer-lower-bottom">
          <div className="copy-right-social">
            <p>© 2024 braveconsultingsolutions.com - Designed by Gaimard F.</p>
            <div className="social-container">
              <div className="icon-container">
                <BiLogoYoutube className="icon-soc" />
              </div>
              <div className="icon-container">
                <BiLogoLinkedin className="icon-soc" />
              </div>
              <div className="icon-container">
                <FaFacebookF className="icon-soc" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer02;
