import React from 'react'
import Navbar from '../components/Navbar.jsx'
import me from '../assets/me.png'
import Coding from '../components/Coding.jsx'
import './About.css'

function About() {
  return (
    <>
        <Navbar />
        <h1 style={{ fontSize: "50px" }}>About</h1>
        <div className="photo-content">
          <img className="photo" src={me} />
        </div>

        <div className="content-about">
          <p style={{ fontSize: "18px" }}>
            Hi! My name is Alan and I am currently a second year Computer Engineering student at Queen's University.
            My primary interest lies in backend development, particularly in areas related to data management and 
            cybersecurity. I am motivated to deepen my understanding of data pipelines and explore effective methods to 
            safeguard data.
          </p>
          <p style={{ fontSize: "18px" }}>
            Apart from my technical interests, I have a passion for running, working out, playing basketball, hiking, 
            enjoying nature, and collecting shoes. Feel free to check out my page!
          </p>
        </div>
        <Coding />
    </>
  )
}

export default About
