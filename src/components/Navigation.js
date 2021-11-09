import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <h1>Error Monitoring Project</h1>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='about'>About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
