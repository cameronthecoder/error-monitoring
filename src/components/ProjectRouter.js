import React from "react";
import { Switch, Route } from "react-router-dom";
import Project from "./Project";

function ProjectRouter({ projects }) {
  return (
    <Switch>
      {projects.map((project) => (
        <Route
          key={project.id}
          path={`/${project.id}`}
          exact
          component={() => <Project project={project} />}
        />
      ))}
    </Switch>
  );
}

export default ProjectRouter;
