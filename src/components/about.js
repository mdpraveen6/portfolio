// import { Link } from "react-router-dom";
import "./about.css"
import src from "../assets/newresume.pdf";
function About(){
    return(
        <div className="hero2" id="About">
                <h1 id="about">About</h1>
            <div className="para">
                    <p className="p_text">
                    I am <span className="about_highlight">Praveen</span>, an aspiring software developer with a strong interest in technology and innovation. I am passionate about exploring how software systems work and applying my knowledge to build meaningful and <span className="about_highlight">practical applications</span> that solve real-world problems.
                    </p>

                    <p className="p_text">
                    I have a solid foundation in programming and experience working with languages such as <span className="about_highlight">C</span>, <span className="about_highlight">C++</span>, <span className="about_highlight">Python</span>, and <span className="about_highlight">JavaScript</span>, along with modern web technologies like <span className="about_highlight">React</span>. I enjoy developing <span className="about_highlight">user-friendly interfaces</span> and writing <span className="about_highlight">clean, efficient, and maintainable code</span> that focuses on both <span className="about_highlight">performance</span> and <span className="about_highlight">scalability</span>.
                    </p>

                    <p className="p_text">
                    I have worked on personal projects that helped me strengthen my understanding of <span className="about_highlight">frontend development</span>, <span className="about_highlight">component-based architecture</span>, and <span className="about_highlight">state management</span>. Through these experiences, I have learned how to structure applications effectively and improve the overall <span className="about_highlight">user experience</span>.
                    </p>

                    <p className="p_text">
                    I actively focus on improving my <span className="about_highlight">problem-solving skills</span> by practicing coding, analyzing different approaches, and learning new concepts. I believe in <span className="about_highlight">consistency</span>, <span className="about_highlight">discipline</span>, and continuous improvement as essential qualities for professional growth.
                    </p>

                    <p className="p_text">
                    I am also interested in emerging technologies such as <span className="about_highlight">Artificial Intelligence</span>, <span className="about_highlight">Internet of Things (IoT)</span>, and modern software development practices. I enjoy staying updated with industry trends and exploring how these technologies can be integrated into real-world systems.
                    </p>

                    <p className="p_text">
                    I am a <span className="about_highlight">quick learner</span> with a curious mindset, always eager to explore new tools, frameworks, and methodologies. I adapt easily to new environments and enjoy collaborating with others to build better solutions.
                    </p>

                    <p className="p_text">
                    My goal is to become a skilled and reliable developer who can contribute to building <span className="about_highlight">impactful</span>, <span className="about_highlight">innovative</span>, and <span className="about_highlight">scalable solutions</span> that create value. I aim to continuously grow my expertise while contributing to meaningful projects in the field of technology.
                    </p>

                    <p className="resume_link">To download Resume  <a href={src} target="_blank" rel="noopener noreferrer" id="link">Clik Here</a></p>

            </div>

        </div>
    );
}

export default About;