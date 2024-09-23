import React from "react";
import "./ProjectCardVideo.scss";

const ProjectCardVideo = ({ demoVideo, title, description }) => {
  return (
    <div className="project-card-video">
      {/* <img src={image} alt="" /> */}
      {/* <video controls>
        <source src={demoVideo} type="video/mp4" />
      </video> */}
      <iframe
        src={demoVideo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      {/* <div className="info">
        <h4 className="title">{title}</h4>
        <p className="desc">{description}</p>
      </div> */}
    </div>
  );
};

export default ProjectCardVideo;
