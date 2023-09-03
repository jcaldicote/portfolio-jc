import React from "react";
import { useFetchSkills } from "../hooks/useApi.js";
import "./Skills.scss";

const Skills = () => {
  const { data: skills, loading, error } = useFetchSkills();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading skills.</p>;
  }

  return (
    <div className="skills-container">
      <div className="skills-flex-container">
        <div className="skills-card">
          <h3>Languages</h3>
          <ul>
            {skills[0].languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
        <div className="skills-card">
          <h3>Databases</h3>
          <ul>
            {skills[0].databases.map((database, index) => (
              <li key={index}>{database}</li>
            ))}
          </ul>
        </div>
        <div className="skills-card">
          <h3>Frameworks</h3>
          <ul>
            {skills[0].frameworks.map((framework, index) => (
              <li key={index}>{framework}</li>
            ))}
          </ul>
        </div>
        <div className="skills-card">
          <h3>Other</h3>
          <ul>
            {skills[0].other.map((otherSkill, index) => (
              <li key={index}>{otherSkill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-card">
          <h3>Tools</h3>
          <ul>
            {skills[0].tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
