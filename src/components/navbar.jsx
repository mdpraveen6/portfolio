import React, { useState, useEffect } from "react"; // Fixes: 'useState' and 'useEffect' not defined
import { Link } from "react-router-dom";             // Fixes: 'Link' not defined
import { NavHashLink } from 'react-router-hash-link'; // Fixes: 'NavHashLink' not defined
import "./navbar.css";

function Navbar() {
  const [opacity, setOpacity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0.4, 1 - scrollY / 600); 
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div 
        className={`overlay ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(false)}
      ></div>

      <div 
        className={`menu-btn ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        style={{ opacity: opacity, transition: "opacity 0.4s ease-out" }}
      >
        {isOpen ? "x" : "☰"}
      </div>

      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <span className="nav_buttions">
          <NavHashLink smooth to="/#Home" onClick={() => setIsOpen(false)}>
            Home
          </NavHashLink>
        </span>
        
        <span><Link to="/academic" onClick={() => setIsOpen(false)} className="nav_buttions">Academics</Link></span>
        <span><Link to="/skill" onClick={() => setIsOpen(false)} className="nav_buttions">Skills</Link></span>
        <span><Link to="/project" onClick={() => setIsOpen(false)} className="nav_buttions">Projects</Link></span>
        
        <span><NavHashLink smooth to="/#About" id="Nav_about" onClick={() => setIsOpen(false)} className="nav_buttions">About</NavHashLink></span>
        <span><NavHashLink smooth to="/#Contact" onClick={() => setIsOpen(false)} className="nav_buttions">Contact Me</NavHashLink></span>

        <div className="nav_icons">
          <span className="nav_buttions"><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></span>
          <span className="nav_buttions"><a href="https://www.linkedin.com/in/praveen-md" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></span>
          <span className="nav_buttions"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdpraveen94@gmail.com&su=Mail from Portfolio" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></span>
        </div>
      </nav>
    </>
  );
}

// THIS LINE FIXES: 'default' export not found
export default Navbar;