import React from "react";
import "./ContactComp.scss";

const ContactComp = () => {
  return (
    <div className="contact-component">
      <div className="contact-us-global">
        <h2 className="title">Contact</h2>
        <p className="desc">
          Nous sommes disponibles 24h / 7 pour repondre à vos besoins et vous
          apporter une solution dans les plus bref delais.
          {/* Nos différentes formations sur divers sujetsNos différentes formations
          sur divers sujets Nos différentes formations sur divers sujets sujets
          Nos différentes formations sur divers sujets */}
        </p>

        <form className="message-us">
          <h1 className="call-to-action">Envoyez nous un message</h1>

          {/* <p className="detail">
            Nos différentes formations sur divers sujetsNos différentes
            formations sur divers sujets Nos différentes formations sur divers
            sujets sujets Nos différentes formations
          </p> */}
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
  );
};

export default ContactComp;
