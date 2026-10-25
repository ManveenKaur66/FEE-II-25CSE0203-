
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Skills = () => {
  return (
    <>
      <h1>My Skills</h1>

      <nav>
        <Link to="tech">Technical Skills</Link>
        <Link to="nontech">Non-Technical Skills</Link>
        <Link to="projects">Projects</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Skills;
