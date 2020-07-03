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
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <button onClick={handleImage}>
            <img className="image" src={count === 0 ? img1 : img2} alt="img" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Office;
