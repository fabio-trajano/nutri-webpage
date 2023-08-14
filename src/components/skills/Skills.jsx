import React from "react";
import "./skills.css";
import Nutricao from "./Nutricao";
import Psicanalise from "./Psicanalise";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Especialidades</h2>
      <span className="section__subtitle">-</span>

      <div className="skills__container container grid">
        <Nutricao />
        <Psicanalise />
      </div>
    </section>
  );
};

export default Skills;
