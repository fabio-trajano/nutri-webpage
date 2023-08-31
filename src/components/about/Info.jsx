import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">+ 11 anos</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Atendimentos</h3>
        <span className="about__subtitle">Online - Braga - Guimarães</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>

        <h3 className="about__title">Plano ALimentar</h3>
        <span className="about__subtitle">personalizado</span>
      </div>
    </div>
  );
};

export default Info;
