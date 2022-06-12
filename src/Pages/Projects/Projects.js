import React from "react";
import useProjects from "../../hooks/useProjects";
import Card from "./Card";

import MovingComponent from "react-moving-text";

const Projects = () => {
  const [projects] = useProjects([]);

  return (
    <div id="projects" className="sm:mt-80 md:mt-20 bg-base-200 pb-20">
      <hr className="w-8/12 mx-auto mt-20 mb-20" />
      <MovingComponent
          type="fadeIn"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
        >
          <h1 className="text-5xl mt-32 font-bold mb-20">Some of My Projects</h1>
        </MovingComponent>
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 justify-items-center mb-20">
        {projects.slice(0,3).map((project, index) => (
          <Card key={index} project={project}></Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
