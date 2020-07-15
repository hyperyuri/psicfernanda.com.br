import React, { useState } from "react";
import "./styles.css";
import Header from "../../components/Header";
import img2 from "../../assets/consultorio_1.jpeg";
import img1 from "../../assets/consultorio_2.jpeg";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Office() {
  const [count, setCount] = useState(0);

  function handleImage() {
    setCount(count === 0 ? 1 : 0);
  }

  return (
    <>
      <Header />

      <div className="officeContainer">
        <div className="left">
          <div>
            <p>O consultório foi pensado para ser um espaço aconchegante.</p>
            <p>
              Localizada na clínica Odontoclin, contamos com sala de espera,
              consultório climatizado e uma decoração pensada especialmente para
              melhor lhe atender.
            </p>
          </div>
        </div>
        <div className="right">
          <button onClick={handleImage}>
            <FaAngleLeft size={50} color="#e6b31e" />
          </button>

          <button className="btnImg" onClick={handleImage}>
            <img src={count === 0 ? img1 : img2} alt="img" />
          </button>

          <button onClick={handleImage}>
            <FaAngleRight size={50} color="#e6b31e" />
          </button>
        </div>
        <p className="p-later">clique na imagem para visualizar mais fotos</p>
      </div>
    </>
  );
}

export default Office;
