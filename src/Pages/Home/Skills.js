import React from "react";
import MovingComponent from "react-moving-text";
import "./Skills.css";
import html from "../../images/icons/icons8-html-5.svg"
import css from "../../images/icons/icons8-css3.svg"
import js from "../../images/icons/icons8-javascript-logo.svg"
import react from "../../images/icons/icons8-react.svg"
import node from "../../images/icons/icons8-nodejs.svg"

const Skills = () => {
  return (
    <div id="skills"
      className="skillContainer sm:h-96 md:h-screen lg:h-1/5 xl:h-1/4 xxl:h-1/6 relative
    "
    >
      <hr className="w-8/12 mx-auto mt-20 mb-20" />
      <div className="skillstext">
        <MovingComponent
          type="fadeIn"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
        >
          <h1 className="text-5xl mt-32 font-bold">My Skills</h1>
        </MovingComponent>
      </div>
      <div className="absolute top-80 left-2">
        <div class="gallery w-full mx-auto">
          <div class="clipped-border">
            <img
              src={html}
              id="clipped"
            />
          </div>
          <div class="clipped-border">
            <img
              src={css}
              id="clipped"
            />
          </div>
          <div class="clipped-border">
            <img
              src={js}
              id="clipped"
            />
          </div>
          <div class="clipped-border">
            <img
              src={react}
              id="clipped"
            />
          </div>
          <div class="clipped-border">
            <img
              src={node}
              id="clipped"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
