import React, { useEffect, useState } from "react";
import { sampleIssues } from "../testData/sampleIssues";

function Project({ project }) {
  const [issues, setIssues] = useState(sampleIssues);

  // const getIssues = async () => {
  //   // url grabs local file currently
  //   const url = "./testData/sampleIssues";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   setIssues(data);
  // };

  // useEffect(() => {
  //   getIssues();
  // }, []);

  return (
    <>
      <h2>{project.name}</h2>
      {issues.map((issue) => (
        <p>{issue.error.name}</p>
      ))}
    </>
  );
}

export default Project;
