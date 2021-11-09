import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const url = 'http://127.0.0.1:5000/api/projects/';
    const response = await fetch(url);
    const data = await response.json();
    setProjects(data.projects);
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <NavLink to={`${project.id}`}>
            <h2>{project.name}</h2>
          </NavLink>
          <p>Created: {project.created_at}</p>
          <p>Last updated: {project.updated_at}</p>
          <p>API key: {project.api_key}</p>
        </div>
      ))}
      <Outlet />
    </>
  );
}

export default Projects;
