import React from 'react';
import './Navbar.css';
import resume from '../assets/alan_hu_resume_copy.pdf'
import { Link } from "react-router-dom";
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }


  return (
    <>
      <header>
        <nav ref = {navRef}>
          <Link to = "/">Home</Link>
          <Link to = "/about">About</Link>
          <Link to = "/projects">Projects</Link>
          <a href= { resume }>Resume</a>
          <button className = "nav-btn nav-close-btn" onClick = { showNavBar }>

          </button>
        </nav>
        <button className = "nav-btn" onClick = { showNavBar }>
          <FaBars />
        </button>

      </header>
    </>
  );
}

export default Navbar;
