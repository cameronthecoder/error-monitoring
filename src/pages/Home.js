import React from 'react';
import Projects from '../components/Projects';

const Home = ({ projects }) => {
  return (
    <div>
      <h2>This is the home page</h2>
      <Projects projects={projects} />
    </div>
  );
};

export default Home;
