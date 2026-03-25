import "./hero.css";
import img from "../assets/image.PNG"; 
import { useState, useEffect } from "react";

function Hero() {
  const fullText = "MUSHINI DHINENDRA PRAVEEN.";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let speed = isDeleting ? 60 : 140;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <div className="content">
      <div className="hero_left">
        <div className="text">
          <h2 id="Name"> {text}<span className="cursor">|</span> </h2>
        </div>
        <div className="hero_para">
          <p className="about-text">
            I am Praveen, a passionate and curious technology enthusiast exploring the intersections of <span className="highlight"> Software Development</span>, <span className="highlight">Artificial Intelligence</span>, and <span className="highlight">Internet of Things (IoT)</span>. I have built a strong foundation in programming and continuously sharpen my proficiency in <span className="highlight"> C</span>, <span className="highlight"> Python</span>, <span className="highlight"> JavaScript</span>, and modern frameworks like <span className="highlight"> React</span> to build scalable, high-performance web applications and automated systems.
          </p>
          
          <p className="about-text">
            My primary goal is to transform complex problems into <span className="highlight">efficient digital solutions</span> by focusing on <span className="highlight"> clean, maintainable code</span> and <span className="highlight">user-centric design</span>. I thrive in collaborative environments that push the boundaries of <span className="highlight">system architecture</span> and <span className="highlight">automation</span>, always striving to contribute to <span className="highlight">impactful projects</span> that make everyday technology smarter, more connected, and more accessible for everyone.
          </p>
        </div>
      </div>

      <div className="hero_right">
        <div className="profile">
          <img src={img} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default Hero;