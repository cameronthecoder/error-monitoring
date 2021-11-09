import React, { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { sampleIssues } from '../testData/sampleIssues';

function Project() {
  const [project, setProject] = useState({
    api_key: '',
    created_at: '',
    id: 0,
    name: '',
    user_id: '',
  });
  const { projectID } = useParams();

  const getProject = async () => {
    const response = await fetch(
      `http://localhost:5000/api/projects/${projectID}/`
    );
    const data = await response.json();
    setProject(data);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <h2>
        <Link to={`/projects/${projectID}`}>{project.name}</Link>
      </h2>
      <Outlet />
    </>
  );
}

export default Project;
