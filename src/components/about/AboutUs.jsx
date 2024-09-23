import React from "react";
import "./AboutUs.scss";
import aboutImg from "../../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-component">
      <div className="about-us-global">
        <h2 className="title">Bave Consulting Solutions</h2>
        <p className="one">
          Nous mettons sur pied des solutions destinées à digitaliser des
          processus au sein d'institutions, entreprises ou établissements vous
          permettant ainsi d'exprimer tout votre potentiel en vous focalisant
          sur ce qui à vraiment de valeur.
          {/* Nos différentes formations sur divers sujetsNos différentes formations
          sur divers sujets Nos différentes formations sur divers sujets sujets
          Nos différentes formations sur divers sujets */}
        </p>
        <p className="two">
          Votre succès nous importe, raison pour laquelle nous ne nous faisons
          pas que designer et implementer une vision technologique, nous prenons
          le temps requis pour comprendre les caractéristiques uniques à votre
          business, vos défis, vos objectifs... afin de concevoir et vous
          délivrer la solution la mieux adaptée à vos besoins.
          {/* We don't just implement technology; we become strategic partners
          invested in your success. We take the time to understand your unique
          business goals and challenges, then leverage our innovative thinking
          to tailor solutions that perfectly align with your needs. We believe
          in clear communication and collaboration throughout the entire
          process, ensuring you're involved every step of the way. */}
        </p>
        <div className="image-container">
          <img src={aboutImg} alt="" className="image1" />
          <img src={aboutImg} alt="" className="image2" />
        </div>
        <div className="cards-container">
          <div className="item">
            <h1 className="number">+25.920</h1>
            <h5 className="desc">Heures Investies</h5>
          </div>
          <div className="item">
            <h1 className="number">+36</h1>
            <h5 className="desc">De Valeur Ajoutée</h5>
          </div>
          <div className="item">
            <h1 className="number">+5</h1>
            <h5 className="desc">Ans d'expérience</h5>
          </div>
          <div className="item">
            <h1 className="number">+60</h1>
            <h5 className="desc">Consultations</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
