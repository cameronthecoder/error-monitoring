import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './components/Project';
import Issue from './components/Issue';
import Issues from './components/Issues';
import Error from './components/Error';
import About from './pages/About';
import './index.css';
import Projects from './components/Projects';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='projects'>
          <Route index element={<Projects />} />
          <Route path=':projectID' element={<Project />}>
            <Route index element={<Issues />} />
            <Route path='issues/:issueID' element={<Issue />} />
          </Route>
        </Route>
        <Route path='about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
