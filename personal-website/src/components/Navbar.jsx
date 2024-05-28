import React from 'react';
import './Navbar.css';
import resume from '../assets/alan_hu_resume_copy.pdf'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#experience">Experience</a></li>
          <li className="navbar-item"><a href="#projects">Projects</a></li>
          <li className="navbar-item"><a href= { resume }>Resume</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
