import React, { useState } from "react";
import "./styles.css";
import Header from "../../components/Header";
import detail from "../../assets/detail.svg";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

import api from "../../service/api";

function Contact() {
  const [user, setUser] = useState();

  const handleChange = (event) => {
    const axiosValue = { ...user };

    axiosValue[event.target.name] = event.target.value;
    setUser(axiosValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/send", {
        name: user.name,
        email: user.email,
        phone: user.phone,
        text: user.text,
      });
      console.log(response);
      alert("enviado email");
    } catch (err) {
      alert("erro ao enviar email");
    }
  };

  return (
    <>
      <Header />

      <div className="contactContainer">
        <form action="" onSubmit={handleSubmit}>
          <div className="containerUpContact">
            <div className="title">
              <h3>Entre em contato para mais informações:</h3>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Telefone"
                required
                onChange={handleChange}
              />
            </div>
            <div className="infos">
              <ul className="logos">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send?phone=5545991023801&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site!"
                  >
                    <FaWhatsapp size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/psiFerAlves/"
                  >
                    <FaFacebook size={25} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/psifernanda.alves/"
                  >
                    <FaInstagram size={25} />
                  </a>
                </li>
              </ul>
              <ul>
                <br />
                <li>Rua Sete de Setembro, 2325 - Centro</li>
                <li>CEP: 85801-140 | Cascavel, PR</li>
                <li>Telefone: (45) 3035-1009 e (45) 99102-3801</li>
                <br />
                <li>Email: contato@psifernanda.com</li>
              </ul>
            </div>
          </div>
          <textarea
            type="text"
            name="text"
            placeholder="Mensagem"
            required
            onChange={handleChange}
          />
          <button type="submit">Enviar Email</button>
        </form>
        <img className="detail" src={detail} alt="detail" />
      </div>
    </>
  );
}

export default Contact;
