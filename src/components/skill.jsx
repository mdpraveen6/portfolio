import "./skill.css";
import { useState, useRef } from "react";

const skills = [
  { name: "C", level: 80 },
  { name: "C++", level: 80 },
  { name: "Python", level: 85 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 70 },
  { name: "React", level: 50 },
  { name: "SQL", level: 70 },
  { name: "Excel", level: 60 },
  { name: "Microsoft Tools", level: 40 }
];

function Skills() {
  const [progress, setProgress] = useState(skills.map(() => 0));
  const intervals = useRef({}); 

  const animateSkill = (index, target) => {
    if (intervals.current[index]) clearInterval(intervals.current[index]);

    let current = 0;
    intervals.current[index] = setInterval(() => {
      current++;
      setProgress((prev) => {
        const updated = [...prev];
        updated[index] = current;
        return updated;
      });

      if (current >= target) {
        clearInterval(intervals.current[index]);
      }
    }, 10); 
  };

  const handleMouseEnter = (index, level) => {
    animateSkill(index, level);
  };

  const handleMouseLeave = (index) => {
    if (intervals.current[index]) clearInterval(intervals.current[index]);
    setProgress((prev) => {
      const updated = [...prev];
      updated[index] = 0;
      return updated;
    });
  };

  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            onMouseEnter={() => handleMouseEnter(index, skill.level)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              {/* Only show percentage if progress > 0 */}
              <span className={`skill-percent ${progress[index] > 0 ? "visible" : ""}`}>
                {progress[index] > 0 ? `${progress[index]}%` : ""}
              </span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${progress[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;