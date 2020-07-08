import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Fernanda Alves</h1>
            </div>
          </Link>
          <div className="links">
            <Link className="link" to="/">
              <p>Sobre mim</p>
            </Link>
            <Link className="link" to="/consultorio">
              <p>Meu consultório</p>
            </Link>
            {/* <Link className="link" to="/blog">
              <p>Blog</p>
            </Link> */}
            <Link className="link" to="/contato">
              <p>Contato</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
