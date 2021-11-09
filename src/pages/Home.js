import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div>
      <h2>This is our home page</h2>
      <Outlet />
    </div>
  );
};

export default Home;
