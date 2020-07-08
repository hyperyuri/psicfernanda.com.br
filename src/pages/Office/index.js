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
            <p>
              Consultório aconchegante para atender tanto crianças, adultos ou
              casais.
            </p>
          </div>
        </div>
        <div className="right">
          <button onClick={handleImage}>
            <FaAngleLeft size={50} color="#e6b31e" />
          </button>

          <img src={count === 0 ? img1 : img2} alt="img" />

          <button onClick={handleImage}>
            <FaAngleRight size={50} color="#e6b31e" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Office;
