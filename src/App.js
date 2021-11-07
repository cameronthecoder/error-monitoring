import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './components/Project';
import Issue from './components/Issue';
import './index.css';

function App() {
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
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={() => (
            <Home projects={projects} setProjects={setProjects} />
          )}
        />
        <Route
          exact
          path='/projects/:projectID'
          children={<Project projects={projects} setProjects={setProjects} />}
        />
        <Route
          path='/projects/:projectID/issues/:issueID'
          children={<Issue />}
        />
        <Route path='*' />
      </Switch>
    </Router>
  );
}

export default App;
