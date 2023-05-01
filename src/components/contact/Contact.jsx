import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x1hewh5",
        "template_2ki8hlo",
        form.current,
        "vxDcl4UI2jbOQBn6f"
      )
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">ALguma dúvida?</h2>
      <span className="section__subtitle">-</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">anapatriciafaria.nutri@gmail.com</span>

              <a
                href="mailto:anapatriciafaria.nutri@gmail.com"
                className="contact__button"
              >
                Fale comigo{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whats-app</h3>
              <span className="contact__card-data">+351 912 584 450</span>

              <a
                href="https://api.whatsapp.com/send?phone=351912584450&text=Olá!"
                className="contact__button"
              >
                Fale comigo{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
