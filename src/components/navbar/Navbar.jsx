import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo03.png";
import { DataContext } from "../../autres/context/DataContext";
import { IoHome } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {
  const { activeLink, setActiveLink } = useContext(DataContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavbarContainer, setMobileNavbarContainer] = useState("");
  const [mobileNavbar, setMobileNavbar] = useState("");
  const [navbarContainerClickCounter, setNavbarContainerClickCounter] =
    useState(0);
  const [navbarClickCounter, setNavbarClickCounter] = useState(0);

  // useEffect(() => {
  // const onScrolled = () => {
  //   if (window.scrollY > 50) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };
  // window.onscroll = () => {
  //   console.log("Scrolling");
  // };
  // }, []);

  useEffect(() => {
    setMobileNavbarContainer(
      document.getElementById("mobile-navbar-container")
    );
    setMobileNavbar(document.getElementById("mobile-navbar"));
  }, []);

  useEffect(() => {
    if (navbarContainerClickCounter != navbarClickCounter) {
      setNavbarContainerClickCounter(0);
      setNavbarClickCounter(0);
      handleSideBar();
    }
  }, [navbarContainerClickCounter]);

  const updateLink = (value) => {
    setActiveLink(value);
    console.log(activeLink);
  };

  const updateCounterContainer = () => {
    setNavbarContainerClickCounter((prev) => prev + 1);
  };

  const updateCounterNavbar = () => {
    setNavbarClickCounter((prev) => prev + 1);
  };

  const handleSideBar = () => {
    mobileNavbarContainer.classList.contains("open")
      ? mobileNavbarContainer.classList.remove("open")
      : mobileNavbarContainer.classList.add("open");
  };

  return (
    <div className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="frist-navbar">
          <div className="logo-container">
            <Link to="/" className="link-nav my-logo">
              <img src={Logo} alt="" className="logo" />
            </Link>
            <Link to="/" className="link-nav name">
              <span className="first">Gaimard</span>
              <span className="second">Solutions</span>
            </Link>
          </div>
          <ul className="menu">
            <li
              onClick={() => updateLink("accueil")}
              className={activeLink === "accueil" ? "main active" : "main"}
            >
              <Link className="link-nav" to="/">
                Accueil
              </Link>
            </li>
            <li
              onClick={() => updateLink("formations")}
              className={activeLink === "formations" ? "main active" : "main"}
            >
              <Link className="link-nav" to="/formations">
                Formations
              </Link>
            </li>
            <li
              onClick={() => updateLink("services")}
              className={activeLink === "services" ? "main active" : "main"}
            >
              <Link className="link-nav" to="/services">
                Services
              </Link>
            </li>
            {/* <li className="dropdown">
              <span className="main">Services</span>
              <ul className="list">
                <li className="list-item">
                  <Link className="sub-link-nav" to="/formations">
                    Développement Web
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="sub-link-nav" to="/formations">
                    Développement Mobile
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="sub-link-nav" to="/formations">
                    Appication Excel
                  </Link>
                </li>
              </ul>
            </li> */}
            <li
              onClick={() => updateLink("projets")}
              className={activeLink === "projets" ? "main active" : "main"}
            >
              <Link className="link-nav" to="/projets">
                Projets
              </Link>
            </li>
            <li
              onClick={() => updateLink("contact")}
              className={activeLink === "contact" ? "main active" : "main"}
            >
              <Link className="link-nav" to="/contact">
                Contact
              </Link>
            </li>
            <div className="btn-start">Start</div>
          </ul>
          <div className="nav-icon-menu" onClick={handleSideBar}>
            <FiMenu className="nav-icon-menu-sub" />
          </div>
        </div>
        <div
          className="mobile-navbar-container"
          id="mobile-navbar-container"
          onClick={updateCounterContainer}
        >
          <div
            className="mobile-navbar"
            id="mobile-navbar"
            onClick={updateCounterNavbar}
          >
            <div className="top">
              <span className="brand-one">Brave Cs</span>
              <span className="brand-two">Solutions</span>
            </div>
            <div className="bottom">
              <ul className="menu">
                <li className="main">
                  <Link to="/" className="link-nav-mobile">
                    <div className="nav-icon-container">
                      <IoHome className="nav-icon" />
                    </div>
                    <span>Accueil</span>
                  </Link>
                </li>
                <li className="main">
                  <Link to="/formations" className="link-nav-mobile">
                    <div className="nav-icon-container">
                      <PiStudentFill className="nav-icon" />
                    </div>
                    <span>Formations</span>
                  </Link>
                </li>
                <li className="main">
                  <Link to="/services" className="link-nav-mobile">
                    <div className="nav-icon-container">
                      <FaHandshake className="nav-icon" />
                    </div>
                    <span>Services</span>
                  </Link>
                </li>
                <li className="main">
                  <Link to="/projets" className="link-nav-mobile">
                    <div className="nav-icon-container">
                      <GrProjects className="nav-icon" />
                    </div>
                    <span>Projets</span>
                  </Link>
                </li>
                <li className="main">
                  <Link to="/contact" className="link-nav-mobile">
                    <div className="nav-icon-container">
                      <MdContacts className="nav-icon" />
                    </div>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
