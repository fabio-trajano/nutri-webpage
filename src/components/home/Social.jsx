import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/anapatriciafaria_nutricao/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://calendly.com/pt"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-calendar-alt"></i>
      </a>

      <a
        href="https://www.trofasaude.pt/bragacentro/corpo_clinico/ana-patricia-faria-dra/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-hospital"></i>
      </a>
    </div>
  );
};

export default Social;
