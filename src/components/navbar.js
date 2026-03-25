import "./navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

function Navbar() {
  const [opacity, setOpacity] = useState(1);

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
    <nav 
      className="navbar" 
      id="navbar" 
      style={{ opacity: opacity, transition: "opacity 0.2s ease-out" }}
    >
      <span>
        <NavHashLink 
          smooth 
          to="/#Home" 
          onClick={() => window.scrollTo(0, 0)}
        >
          Home
        </NavHashLink>
      </span>
      
      <span><Link to="/academic">Academics</Link></span>
      <span><Link to="/skill">Skills</Link></span>
      <span><Link to="/project">Projects</Link></span>
      
      <span><NavHashLink smooth to="/#About" id="Nav_about">About</NavHashLink></span>
      <span><NavHashLink smooth to="/#Contact">Contact Me</NavHashLink></span>

      <div className="nav_icons">
        <span><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></span>
        <span><a href="https://www.linkedin.com/in/praveen-md" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></span>
        <span><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdpraveen94@gmail.com&su=Hiring Opportunity&body=Hi Praveen," target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></span>
      </div>
    </nav>
  );
}

export default Navbar;