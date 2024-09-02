import { createContext, useState } from "react";
import Training1 from "../../assets/images/logo.png";

export const DataContext = createContext(null);

const DataContextProvider = (props) => {
  const [activeLink, setActiveLink] = useState("accueil");

  const trainingList = [
    {
      image: Training1,
      title: "Excel",
      desc: "Les Bases",
    },
    {
      image: Training1,
      title: "Excel",
      desc: "Tableau de Bord & TCD",
    },
    {
      image: Training1,
      title: "Excel",
      desc: "Développement VBA",
    },
    {
      image: Training1,
      title: "Développement Web",
      desc: "HTML,CSS, javascript",
    },
    {
      image: Training1,
      title: "Développement Mobile",
      desc: "HTML,CSS, javascript",
    },
  ];

  const contextValue = {
    activeLink,
    setActiveLink,
    trainingList,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
