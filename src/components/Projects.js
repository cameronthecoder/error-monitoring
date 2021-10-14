import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectRouter from "./ProjectRouter";

function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const url = "http://127.0.0.1:5000/api/projects/";
    const response = await fetch(url);
    const data = await response.json();
    setProjects(data.projects);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`/${project.id}`}>
            <h2>{project.name}</h2>
          </Link>
          <p>Created: {project.created_at}</p>
          <p>Last updated: {project.updated_at}</p>
          <p>API key: {project.api_key}</p>
        </div>
      ))}
      <ProjectRouter projects={projects} />
    </>
  );
}

export default Projects;
