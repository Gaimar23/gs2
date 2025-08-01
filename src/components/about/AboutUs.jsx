import "./AboutUs.scss";
import aboutImg from "../../assets/images/about.jpg";
import aboutImg1 from "../../assets/images/about1.jpg";
import {
  motion,
  useInView,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { useRef, useState } from "react";
import AnimatedCounter from "../animatedCounter/AnimatedCounter";

const AboutUs = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="about-us-component">
      <div className="about-us-global">
        <h2 className="title">Bave Consulting Solutions</h2>
        <p className="one">
          Nous mettons sur pied des solutions destinées à digitaliser des
          processus au sein d'institutions, entreprises ou établissements vous
          permettant ainsi d'exprimer tout votre potentiel en vous focalisant
          sur ce qui à vraiment de la valeur.
        </p>
        <p className="two">
          Votre succès nous importe, raison pour laquelle nous ne nous faisons
          pas que designer et implementer une vision technologique, nous prenons
          le temps requis pour comprendre les caractéristiques uniques à votre
          business, vos défis, vos objectifs... afin de concevoir et vous
          délivrer la solution la mieux adaptée à vos besoins.
        </p>
        <div className="image-container">
          <img src={aboutImg1} alt="" className="image1" />
          <img src={aboutImg} alt="" className="image2" />
        </div>
        <motion.div
          className="cards-container"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="item">
            <h1 className="number">
              {/* +25.920 */}
              {isInView && <AnimatedCounter to={25920} />}
            </h1>
            <h5 className="desc">Heures Investies</h5>
          </div>
          <motion.div className="item" variants={itemVariants}>
            <h1 className="number">
              {isInView && <AnimatedCounter to={36} />}
            </h1>
            <h5 className="desc">De Valeur Ajoutée</h5>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <h1 className="number">{isInView && <AnimatedCounter to={5} />}</h1>
            <h5 className="desc">Ans d'expérience</h5>
          </motion.div>
          <motion.div className="item" variants={itemVariants}>
            <h1 className="number">
              {isInView && <AnimatedCounter to={60} />}
            </h1>
            <h5 className="desc">Consultations</h5>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
