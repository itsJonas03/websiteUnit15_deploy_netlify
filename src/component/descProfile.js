import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "../css/descProfile.css";
const experience = [
  {
    company: "Trainee 1",
    position: "Enter Position of Trainee",
    project: " Project ",
    desc: {
      1: "Lorem ipsum dolor sit ame",
      2: "Lorem ipsum dolor sit ame",
      3: "Lorem ipsum dolor sit ame",
    },
  },
  {
    company: "Trainee 2",
    position: "Enter Position of Trainee",
    project: " Project ",
    desc: {
        1: "Lorem ipsum dolor sit ame",
        2: "Lorem ipsum dolor sit ame",
        3: "Lorem ipsum dolor sit ame",
      },
  },
  {
    company: "Trainee 3",
    position: "Enter Position of Trainee",
    project: " Project ",
    desc: {
      1: "Lorem ipsum dolor sit ame",
      2: "Lorem ipsum dolor sit ame",
      3: "Lorem ipsum dolor sit ame",
    },
  },
  {
    company: "Trainee 4",
    position: "Enter Position of Trainee",
    project: " Project ",
    desc: {
      1: "Lorem ipsum dolor sit ame",
      2: "Lorem ipsum dolor sit ame",
      3: "Lorem ipsum dolor sit ame",
    },
  },
];
function Experience() {
  const [value, setValue] = useState(0);
  const { company, position, project, desc } = experience[value];

  return (
    <section className="experience">
      <h2 className="experience-title">
        Trainees    
      </h2>
      <div className="underline"></div>
      <div className="experiences-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`experience-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="experience-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="experience-date">{project}</p>
          {Object.keys(desc).map((key, index) => {
            return (
              <div key={index} className="experience-desc">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="experience-icon"
                ></FontAwesomeIcon>
                <p>{desc[key]}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Experience;