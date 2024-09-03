import React from "react";
import "./Contact.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer02 from "../../components/footer02/Footer02";
import Welcome from "../../components/welcome/Welcome";
import WhatSapp from "../../components/whatSapp/WhatSapp";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <Welcome text="Nous sommes à votre écoute 24h/24h" />
      <section className="contact-us">
        <div className="contact-us-container">
          <div className="contact-component">
            <div className="contact-us-global">
              {/* <h2 className="title">Contact</h2>
        <p className="desc">
          Nos différentes formations sur divers sujetsNos différentes formations
          sur divers sujets Nos différentes formations sur divers sujets sujets
          Nos différentes formations sur divers sujets
        </p> */}

              <form className="message-us">
                <p className="detail">
                  Nos différentes formations sur divers sujetsNos différentes
                  formations sur divers sujets Nos différentes formations sur
                  divers sujets sujets Nos différentes formations
                </p>
                <div className="name input">
                  <label htmlFor="">Nom</label>
                  <input type="text" required />
                </div>
                <div className="email input">
                  <label htmlFor="">Email</label>
                  <input type="email" required />
                </div>
                <div className="message">
                  <label htmlFor="">Votre Message</label>
                  <textarea rows={5} required></textarea>
                </div>
                <button type="submit" className="send-message">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer02 />
      <WhatSapp />
    </div>
  );
};

export default Contact;
