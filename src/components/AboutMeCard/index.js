import React from "react";
import "./style.css";
// https://create-react-app.dev/docs/adding-images-fonts-and-files/
import MarcPic from "./images/20180720_122106.jpg"

function AboutMeCard() {

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-header">Full-Stack Web Developer</h2>
        <img src={MarcPic} className="card-img-top" alt="Marc Strong"></img>
      </div>
    </div>
  );
}

export default AboutMeCard;