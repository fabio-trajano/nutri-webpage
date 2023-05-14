import React, { useState } from "react";
import "./calendly.css";
import Calendar from "./inlinecalendar";
import Ebook01 from "../../assets/ebook01.pdf"

const Calendly = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Atendimentos</h2>
      <span className="section__subtitle">Como são meus atendimentos</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-clipboard-alt services__icon"></i>
            <h3 className="services__title">
              Consulta <br /> Nutrição
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            Mais info
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Consulta Nutrição</h3>
              <p className="services__modal-description">
                Consulta individual de nutrição com foco no objetivo do paciente. (50min)
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Análise de corporal completa.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Plano alimentar personalizado.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    E-book com receitas vegetarianas.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Info.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Info.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-brain services__icon"></i>
            <h3 className="services__title">
              Consulta <br /> Psicanálise
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            Mais info
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Consulta Psicanálise</h3>
              <p className="services__modal-description">
                Acompanhamento psicológico
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Info.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Info.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Info.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Info.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Info.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Nutrição + <br /> Psicanálise
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="services__button">
            Mais info
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Mutrição e Psicanálise</h3>
              <p className="services__modal-description">
                Atendimento de nutrição e Psicanálise combinados para o melhor bem-estar do paciente e para conseguir atingir e manter os objetivos.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Acompanhamento psicológico.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Plano alimentar</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Info.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Info.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Info.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-calendar-alt services__icon"></i>
            <h3 className="services__title">
              Marcação<br /> Online
            </h3>
          </div>

          <span onClick={() => toggleTab(4)} className="services__button">
            Clique aqui
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <Calendar />

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-book-open services__icon"></i>
            <h3 className="services__title">
              E-books <br /> Gratuitos
            </h3>
          </div>

          <span onClick={() => toggleTab(5)} className="services__button">
            Mais info
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 5
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">E-books</h3>
              <p className="services__modal-description">
                E-books gratuitos para baixar
              </p>

              <ul className="services__modal-services grid">
                <a href={Ebook01}>
                  <li className="services__modal-service">
                    <i className="uil uil-import services__modal-icon"></i>
                      <p className="services__modal-info">
                      Receitas para a saúde física e emocional
                      </p>
                  </li>
                </a>

                <a href={Ebook01}>
                  <li className="services__modal-service">
                    <i className="uil uil-import services__modal-icon"></i>
                      <p className="services__modal-info">
                      Alimentação Vegan e Vegetariana: Como começar?
                      </p>
                  </li>
                </a>

                <a href={Ebook01}>
                  <li className="services__modal-service">
                    <i className="uil uil-import services__modal-icon"></i>
                      <p className="services__modal-info">
                      Snacks Saudáveis Vegetarianos
                      </p>
                  </li>
                </a>

                <a href={Ebook01}>
                  <li className="services__modal-service">
                    <i className="uil uil-import services__modal-icon"></i>
                      <p className="services__modal-info">
                      A importância da redução de sal na alimentação
                      </p>
                  </li>
                </a>

                <a href={Ebook01}>
                  <li className="services__modal-service">
                    <i className="uil uil-import services__modal-icon"></i>
                      <p className="services__modal-info">
                      A relação entre a nutrição e a psicanálise
                      </p>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Calendly;
