import React from "react";
import useProjects from "../../hooks/useProjects";
import Card from "./Card";

const Projects = () => {
  const [projects] = useProjects([]);
  console.log(projects);

  return (
    <div id="projects" className="mt-20">
      <hr className="w-8/12 mx-auto mt-20 mb-20" />
      <h1 className="text-4xl mb-20">Some Of My Projects</h1>
      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 justify-items-center mb-20">
        {projects.slice(0,3).map((project, index) => (
          <Card key={index} project={project}></Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
