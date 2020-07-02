import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import detail from "../../assets/detail.svg";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Header />
      <div className="contactContainer">
        <form action="">
          <div className="containerUpContact">
            <div className="title">
              <h3>Entre em contato para mais informações:</h3>
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Telefone" required />
            </div>
            <div className="infos">
              <ul className="logos">
                <li>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5545991023801&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site!"
                  >
                    <FaWhatsapp size={25} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://facebook.com">
                    <FaFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/fernandaisayu/"
                  >
                    <FaInstagram size={25} />
                  </a>
                </li>
              </ul>
              <ul>
                <br />
                <li>Odontoclin Clínica Odontológica</li>
                <li>Rua Sete de Setembro, 2325 - Centro</li>
                <li>CEP: 85801-140 | Cascavel, PR</li>
                <li>Telefone: (45) 3035-1009 e (45) 99102-3801</li>
              </ul>
            </div>
          </div>
          <textarea type="text" placeholder="Mensagem" required />
          <button type="submit">Enviar Email</button>
        </form>
        <img className="detail" src={detail} alt="detail" />
      </div>
    </>
  );
}

export default Contact;
