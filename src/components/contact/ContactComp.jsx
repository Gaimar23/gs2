import React, { useRef } from "react";
import "./ContactComp.scss";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactComp = () => {
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
    <div className="contact-component">
      <div className="contact-us-global">
        <h2 className="title">Contact</h2>
        <p className="desc">
          Nous sommes disponibles 24h / 7 pour repondre à vos besoins et vous
          apporter une solution dans les plus bref delais.
        </p>

        <form className="message-us" ref={clientForm} onSubmit={sendEmail}>
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
  );
};

export default ContactComp;
