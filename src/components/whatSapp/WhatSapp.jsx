import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import "./WhatSapp.scss";

const WhatSapp = () => {
  return (
    <div className="whatsapp-container">
      <a href="https://wa.me/237620232111" style={{ color: "white" }}>
        <div className="sub-container">
          <BsWhatsapp className="whatsapp-icon" />
          <span style={{ fontSize: "15px" }}>Discutons</span>
        </div>
      </a>
    </div>
  );
};

export default WhatSapp;
