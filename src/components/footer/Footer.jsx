import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ana Patricia Nutricionista</h1>


        <div className="footer__social">
          <a
            href="https://www.trofasaude.pt/bragacentro/corpo_clinico/ana-patricia-faria-dra/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-hospital"></i>
          </a>

          <a
            href="https://www.instagram.com/anapatriciafaria_nutricao/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://calendly.com/anapatriciafaria/consulta"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-calendar-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; fabio-trajano. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
