import React from "react";
import "./project.css";

function Projects() {
    return (
        <div className="projects_wrapper">
            <h1 className="projects_header">Projects</h1>
            
            <div className="projects_container">

                <div className="project_box">
                    <div className="accent_bar"></div>
                    <span className="lang_tag">React</span>
                    <h2 className="project_name">Portfolio Site</h2>
                    <p className="project_text">
                        A modern, responsive personal branding site built 
                        with React and custom CSS animations.
                    </p>
                    <div className="project_footer">
                        <button className="code"><a href="https://github.com/mdpraveen6/portfolio" target="_blank" rel="noopener noreferrer" className="project_code">code</a></button>
                        <button className="link"><a href="https://mdpraveen6.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="project_links">View Project</a></button>
                    </div>
                </div>

                <div className="project_box">
                    <div className="accent_bar"></div>
                    <span className="lang_tag">Java Script</span>
                    <h2 className="project_name">Calculator</h2>
                    <p className="project_text">
                        A sleek, interactive calculator app built with HTML, CSS, and JavaScript, featuring a responsive design and smooth animations for an intuitive user experience.
                    </p>
                    <div className="project_footer">
                        <button className="code"><a href="https://github.com/mdpraveen6/Calculator" target="_blank" rel="noopener noreferrer" className="project_code">code</a></button>
                        <button className="link"><a href="https://mdpraveen6.github.io/Calculator/" target="_blank" rel="noopener noreferrer" className="project_links">View Project</a></button>
                    </div>
                </div>

                <div className="project_box">
                    <div className="accent_bar"></div>
                    <span className="lang_tag">HTML&CSS</span>
                    <h2 className="project_name">Time Table</h2>
                    <p className="project_text">
                        A clean timetable web app built with HTML and CSS, designed to organize schedules efficiently with a user-friendly layout and interactive design elements
                    </p>
                    <div className="project_footer">
                        <button className="code"><a href="https://github.com/mdpraveen6/Time-table" target="_blank" rel="noopener noreferrer" className="project_code">code</a></button>
                        <button className="link"><a href="https://mdpraveen6.github.io/Time-table/" target="_blank" rel="noopener noreferrer" className="project_links">View Project</a></button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Projects;