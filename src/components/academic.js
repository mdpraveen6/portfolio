import "./academic.css"
function Academics(){
    return(
        <div className="A_main">
            <h1 id="tittle">Acadamics</h1>
                <div className="card">
                    <div className="line">
                            <span className="dots"></span>
                    </div>
                    <div className="line_content">
                            <h1 id="edu">B-Tech</h1>
                            <h4 id="instution">Sandip University</h4>
                            <h4 id="year">Year : 2024-2028</h4>
                            <h4 id="cgpa">CGPA : 8.75(3rd Semister)</h4>
                            <p id="clg_des">I am a second-year B.Tech student at Sandip University with a strong foundation in computer science and software development. I have proficiency in C, C++, Python, and front-end technologies like HTML, CSS, and JavaScript, and I am passionate about applying my skills to solve real-world problems.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="line">
                            <span className="dots"></span>
                    </div>
                    <div className="line_content">
                            <h1 id="edu">Inter(X+II)</h1>
                            <h4 id="instution">Bhashyam Jr college</h4>
                            <h4 id="year">2022-2024</h4>
                            <h4 id="cgpa">Percentage : 9.14%</h4>
                            <p id="clg_des">I completed my Intermediate education (11th and 12th) with a score of 9.14, reflecting strong academic consistency and a solid foundation that supports my ongoing engineering studies.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="line">
                            <span className="dots"></span>
                    </div>
                    <div className="line_content">
                            <h1 id="edu">School(X)</h1>
                            <h4 id="instution">Bhashaym High School</h4>
                            <h4 id="year">2021-2022</h4>
                            <h4 id="cgpa">Percentage : 10%</h4>
                            <p id="clg_des">I completed my Secondary School Education (10th grade) with a CGPA of 10, demonstrating excellent academic performance and a strong foundation in fundamental subjects.</p>
                    </div>
                </div>
        </div>
    );
}

export default Academics;