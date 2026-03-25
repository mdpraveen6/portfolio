import React from "react";
import "./project.css";

function Projects() {
    return (
        <div className="projects_wrapper">
            <h1 className="projects_header">Projects</h1>
            
            <div className="projects_container">
                <div className="project_box">
                    <div className="accent_bar"></div>
                    <span className="lang_tag">Python</span>
                    <h2 className="project_name">Attack-Defence Game</h2>
                    <p className="project_text">
                        A strategic combat simulation featuring HP management, 
                        damage calculation, and turn-based logic.
                    </p>
                    <div className="project_footer">
                        <button className="case_study_btn">View Project</button>
                    </div>
                </div>
                <div className="project_box">
                    <div className="accent_bar"></div>
                    <span className="lang_tag">JS / HTML</span>
                    <h2 className="project_name">Smart Calculator</h2>
                    <p className="project_text">
                        A sleek mathematical utility with a custom glass-styled 
                        interface and keyboard support.
                    </p>
                    <div className="project_footer">
                        <button className="case_study_btn">View Project</button>
                    </div>
                </div>
                <div className="project_box">
                    <div className="accent_bar"></div>
                    <span className="lang_tag">Python</span>
                    <h2 className="project_name">E-Commerce Cart</h2>
                    <p className="project_text">
                        Backend logic for item processing, price totaling, 
                        and tax management for digital storefronts.
                    </p>
                    <div className="project_footer">
                        <button className="case_study_btn">View Project</button>
                    </div>
                </div>
                <div className="project_box">
                    <div className="accent_bar"></div>
                    <span className="lang_tag">React</span>
                    <h2 className="project_name">Portfolio Site</h2>
                    <p className="project_text">
                        A modern, responsive personal branding site built 
                        with React and custom CSS animations.
                    </p>
                    <div className="project_footer">
                        <button className="case_study_btn"><a href="http://localhost:3000/#Home" target="_blank" rel="noopener noreferrer" >Project</a></button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;