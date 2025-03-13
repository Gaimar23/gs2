import React, { useState } from "react";
import "./Projects.scss";
import Project1 from "../../assets/images/project1.png";
import Project2 from "../../assets/images/project2.png";
import Project3 from "../../assets/images/project3.png";
import ProjectCardVideo from "../projectCardVideo/ProjectCardVideo";
import video01 from "../../assets/videos/Tiers1920.mp4";
import { FaTv } from "react-icons/fa6";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Projects = () => {
  // const ourProjects = [
  //   {
  //     title: "Business StartUp",
  //     description: "Design & Development",
  //     image: Project1,
  //   },
  //   {
  //     title: "Excel Business App",
  //     description: "Excel Development",
  //     image: Project2,
  //   },
  //   {
  //     title: "Business StartUp",
  //     description: "Design & Development",
  //     image: Project2,
  //   },
  //   {
  //     title: "Client Project",
  //     description: "Mobile Development",
  //     image: Project3,
  //   },
  //   {
  //     title: "Business StartUp",
  //     description: "Design & Development",
  //     image: Project1,
  //   },
  //   {
  //     title: "Business StartUp",
  //     description: "Design & Development",
  //     image: Project3,
  //   },
  // ];
  const ourProjects = [
    {
      title: "Appli Web",
      description: "Design & Developpement",
      video: "https://www.youtube.com/embed/Cp5ZCQuQLPc?si=cfl5ZMBi3SUD-DtY",
    },
    {
      title: "Appli Web",
      description: "Design & Developpement",
      video: "https://www.youtube.com/embed/aNLQTZa6TwM?si=LWum6R-Qk-prolIT",
    },
    {
      title: "Excel Business App",
      description: "Excel Development",
      video: "https://www.youtube.com/embed/ZklG6SC05Cg?si=ktzvM-0fwkHYA9Nc",
    },
    {
      title: "Client Project",
      description: "Mobile Development",
      video: "https://www.youtube.com/embed/FRn-x2sW4oo?si=Qj0F6-z0fct_ryN0",
    },
    {
      title: "Excel Business App",
      description: "Excel Development",
      video: "https://www.youtube.com/embed/xozluVeoKVw?si=Qa6V4LqNZU7tsvHQ",
    },
    {
      title: "Business StartUp",
      description: "Design & Development",
      video: "https://www.youtube.com/embed/xozluVeoKVw?si=Qa6V4LqNZU7tsvHQ",
    },
  ];

  const [activeTab, setActiveTab] = useState("second");

  const updateTabLink = (link) => {
    setActiveTab(link);
  };
  return (
    <div className="projects">
      <div className="projects-global">
        <h2>Projets</h2>
        <p>
          Quelque uns de nos projets donc sites ou applications web,
          applications mobiles, applications Excel VBA finalisés ou en cours.
        </p>
        <div className="tab-container">
          <ul className="tab-list">
            <li
              onClick={() => updateTabLink("first")}
              className={activeTab === "first" ? "tab-link active" : "tab-link"}
            >
              {/* Tab N°01 */}
              <HiMiniArrowLongLeft size={15} />
            </li>
            <li
              onClick={() => updateTabLink("second")}
              className={
                activeTab === "second" ? "tab-link active" : "tab-link"
              }
            >
              {/* Tab N°02 */}
              <FaTv size={15} />
            </li>
            <li
              onClick={() => updateTabLink("third")}
              className={activeTab === "third" ? "tab-link active" : "tab-link"}
            >
              {/* Tab N°03 */}
              <HiMiniArrowLongRight size={15} />
            </li>
          </ul>
          <div className="tab-content">
            <div className="first">
              {/* {ourProjects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                  />
                );
              })} */}
              {ourProjects.map((project, index) => {
                return (
                  <ProjectCardVideo
                    key={index}
                    demoVideo={project.video}
                    title={project.title}
                    description={project.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
