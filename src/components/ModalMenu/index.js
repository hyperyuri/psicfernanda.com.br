import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function ModalError() {
  return (
    <div className="modalLinkContainer">
      <div className="componentModalLink">
        <Link className="name" to="/">
          <p>Sobre mim</p>
        </Link>
        <Link className="name" to="/consultorio">
          <p>Meu consultório</p>
        </Link>
        <Link className="name" to="/contato">
          <p>Contato</p>
        </Link>
      </div>
    </div>
  );
}

export default ModalError;
