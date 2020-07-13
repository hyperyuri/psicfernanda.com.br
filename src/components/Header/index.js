import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.svg";
import ModalMenu from "../ModalMenu";

function Header() {
  const [modal, setModal] = useState(false);
  const handleChange = () => {
    setModal(!modal);
  };
  return (
    <>
      {!modal ? (
        <> </>
      ) : (
        <>
          {" "}
          <ModalMenu />
        </>
      )}

      <div className="headerContainer">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Fernanda Alves</h1>
          </div>
        </Link>
        <div className="linkMenu">
          <button onClick={handleChange}>
            <div className={modal === true ? "active" : "disabled"}></div>
            <div className={modal === true ? "active" : "disabled"}></div>
            <div className={modal === true ? "active" : "disabled"}></div>
          </button>
        </div>

        <div className="links">
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
    </>
  );
}

export default Header;
