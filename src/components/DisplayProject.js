import React from "react";
import { useState } from "react/cjs/react.development";

function DisplayProject() {
  const [inputID, setInputID] = useState("");
  const [project, setProject] = useState({});

  const handleChange = (event) => {
    const { value } = event.target;
    setInputID(value);
  };

  const handleClick = async () => {
    const url = "http://127.0.0.1:5000/api/projects/";
    const response = await fetch(url + inputID);
    const data = await response.json();
    setProject(data);
  };

  return (
    <div>
      <input onChange={handleChange} value={inputID} />
      <button onClick={handleClick}>Submit</button>
      {project.name && <h2>{project.name}</h2>}
    </div>
  );
}

export default DisplayProject;
