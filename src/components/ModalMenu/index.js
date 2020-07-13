import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function ModalError() {
  return (
    <div className="modalErrorContainer">
      <div className="componentModalLink">
        <Link className="link" to="/">
          <p>Sobre mim</p>
        </Link>
        <Link className="link" to="/consultorio">
          <p>Meu consultório</p>
        </Link>
        <Link className="link" to="/contato">
          <p>Contato</p>
        </Link>
      </div>
    </div>
  );
}

export default ModalError;
