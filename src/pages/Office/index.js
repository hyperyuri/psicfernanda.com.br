import React, { useState } from "react";
import "./styles.css";
import Header from "../../components/Header";
import img2 from "../../assets/consultorio_1.jpeg";
import img1 from "../../assets/consultorio_2.jpeg";
import { MdCompareArrows } from "react-icons/md";

function Office() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count === 0 ? 1 : 0);
  }

  return (
    <>
      <Header />

      <div className="officeContainer">
        <div>
          <img className="image" src={count === 0 ? img1 : img2} alt="img" />
          <button onClick={handleCount}>
            <MdCompareArrows size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Office;
