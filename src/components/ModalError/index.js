import React from "react";
import "./styles.css";

function ModalError() {
  return (
    <div className="modalErrorContainer">
      <div className="componentModalError">
        <h1>
          <span>{" 😥 "}</span> Houve falha ao enviar o email!
        </h1>
        <p>Favor tentar novamente.</p>
      </div>
    </div>
  );
}

export default ModalError;
