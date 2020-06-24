import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <>
      <div className="headerContainer">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h1>Fernanda Alves</h1>
          </div>
        </Link>
        <div className="links">
          <Link className="link" to="/sobre">
            <p>Sobre mim</p>
          </Link>
          <Link className="link" to="/ambiente">
            <p>Meu consultório</p>
          </Link>
          <Link className="link" to="/blog">
            <p>Blog</p>
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
