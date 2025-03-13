import React, { useRef } from "react";
import "./Contact.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer02 from "../../components/footer02/Footer02";
import Welcome from "../../components/welcome/Welcome";
import WhatSapp from "../../components/whatSapp/WhatSapp";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const clientForm = useRef();
  const serviceId = import.meta.env.VITE_MY_SERVICE_ID;
  const templateId = import.meta.env.VITE_MY_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_MY_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    // `${JSON.stringify(import.meta.env.MY_SERVICE_ID)}`,

    emailjs
      .sendForm(serviceId, templateId, clientForm.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success("Message envoyé");
          e.target[0].value = "";
          e.target[1].value = "";
          e.target[2].value = "";
          // e.target[3].value = "";
        },
        (error) => {
          toast.error("Erreur rencontrée");
        }
      );
  };

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
              <div className="animated-action">
                <div className="wrapper">
                  <p>Vous désirez </p>
                  <div className="options">
                    <span className="option">Une formation</span>
                    <span className="option">Un Site ou Application Web</span>
                    <span className="option">Une Application Mobile</span>
                    <span className="option">Une formation</span>
                  </div>
                </div>
              </div>

              <form
                className="message-us"
                ref={clientForm}
                onSubmit={sendEmail}
              >
                <h1 className="call-to-action">Envoyez nous un message</h1>
                <div className="name input">
                  <label htmlFor="">Nom</label>
                  <input type="text" name="user_name" required />
                </div>
                <div className="email input">
                  <label htmlFor="">Email</label>
                  <input type="email" name="user_email" required />
                </div>
                <div className="message">
                  <label htmlFor="">Votre Message</label>
                  <textarea rows={5} name="message" required></textarea>
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
