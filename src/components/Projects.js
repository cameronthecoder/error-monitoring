import React from 'react';
import { Link } from 'react-router-dom';

function Projects({ projects }) {
  console.log(projects);
  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`projects/${project.id}`}>
            <h2>{project.name}</h2>
          </Link>
          <p>Created: {project.created_at}</p>
          <p>Last updated: {project.updated_at}</p>
          <p>API key: {project.api_key}</p>
        </div>
      ))}
    </>
  );
}

export default Projects;
