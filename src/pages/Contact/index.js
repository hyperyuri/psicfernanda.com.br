import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import { FaWhatsapp, FaFacebookSquare, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Header />
      <div className="contactContainer">
        <div className="inputable">
          <p>Entre em contato para mais informações:</p>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Email" />
          <textarea type="text" placeholder="Mensagem" />
          <input type="text" placeholder="Telefone" />
          <button type="submit">Enviar Email</button>
        </div>
        <div className="otherInfor">
          <ul className="logos">
            <li>
              <a href=" ">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
          </ul>
          <ul>
            <br />
            <li>Odontoclin Clínica Odontológica</li>
            <br />
            <li>Rua Sete de Setembro, 2325 - Centro</li>
            <li>CEP: 85801-140 | Cascavel, PR</li>
            <li>Telefone: (45) 3035-1009 e (45) 99102-3801</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
