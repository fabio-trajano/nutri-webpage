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
      <span className="section__subtitle">Fale comigo</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">anapatfaria@gmail.com</span>

              <a
                href="mailto:examplemail@gmail.com.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+351 XXX XXX XXX</span>

              <a
                href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Marcação</h3>
              <span className="contact__card-data">user.fb123</span>

              <a href="https://m.me/crypticalcoder" className="contact__button">
                Write me{" "}
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
