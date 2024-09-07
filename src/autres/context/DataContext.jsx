import { createContext, useState } from "react";
import Training1 from "../../assets/images/logo.png";
import cours3 from "../../assets/images/cours/1.png";
import cours4 from "../../assets/images/cours/2.png";
import cours5 from "../../assets/images/cours/3.png";
import cours6 from "../../assets/images/cours/6.png";
import cours7 from "../../assets/images/cours/7.png";

export const DataContext = createContext(null);

const DataContextProvider = (props) => {
  const [activeLink, setActiveLink] = useState("accueil");

  const trainingList = [
    {
      image: cours3,
      title: "Excel",
      desc: "Tout savoir sur Excel",
    },
    {
      image: cours4,
      title: "Excel",
      desc: "Tableau de Bord & TCD",
    },
    {
      image: cours5,
      title: "Excel",
      desc: "Macros & VBA",
    },
    {
      image: cours6,
      title: "Développement Web",
      desc: "Full Stack",
    },
    {
      image: cours7,
      title: "Développement",
      desc: "Mobile",
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
