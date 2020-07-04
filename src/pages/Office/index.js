import React, { useState } from "react";
import "./styles.css";
import Header from "../../components/Header";
import img2 from "../../assets/consultorio_1.jpeg";
import img1 from "../../assets/consultorio_2.jpeg";
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
              Consultório aconchegante para atender tanto crianças, adulto ou
              casais.
            </p>
          </div>
          <div>
            <h5>clique na foto para visualizar as imagens</h5>
          </div>
        </div>
        <div className="right">
          <button onClick={handleImage}>
            <img className="image" src={count === 0 ? img1 : img2} alt="img" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Office;
