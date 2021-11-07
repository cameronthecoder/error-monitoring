import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { sampleIssues } from '../testData/sampleIssues';

function Project({ projects }) {
  const [name, setName] = useState('');
  const [issues, setIssues] = useState([]);
  const { projectID } = useParams();

  // const getIssues = async () => {
  //   const response = await fetch('../testData/sampleIssues');
  //   const data = await response.json();
  //   setIssues(data);
  //   console.log(data);
  // };

  useEffect(() => {
    const newProject = projects.find(
      (project) => project.id === parseInt(projectID)
    );
    setName(newProject.name);
    // getIssues();
    setIssues(sampleIssues);
  }, [projectID, projects]);

  const issuesElements = issues.map((issue) => (
    <Link to={`${projectID}/issues/${issue.id}`}>
      <p>{issue.error.name}</p>
    </Link>
  ));

  return (
    <>
      <h2>{name}</h2>
      {issuesElements}
    </>
  );
}

export default Project;
