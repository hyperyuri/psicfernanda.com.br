import React from "react";
import "./styles.css";
import girasoll from "../../assets/tes.jpeg";
import Header from "../../components/Header";

function AboutMe() {
  return (
    <>
      <Header />
      <div className="aboutContainer">
        <div className="aboutLeft">
          <h2>CRP-08/31908</h2>

          <div className="myHistory">
            <h1>Sobre mim</h1>
            <br />
            <p>
              Meu nome é Fernanda Maria Alves psicóloga clínica graduada pela
              Universade Paranaense (UNIPAR), e desde criança meu sonho era ser
              psicóloga, quando tive a oportunidade de concretizar este sonho
              tive a absoluta certeza que ser psicóloga é contribuir para a
              potencializaçao da qualidade de vida, sendo assim tenho como
              objetivo oferecer um atendimento de qualidade, trabalhando novas
              possibilidades diante do conflito e de maneira compromissada em
              buscar, ao lado da pessoa, caminhos que melhorem a sua qualidade
              de vida e lhe propiciem bem-estar. Coloco-me a disposição para o
              seu processo terapeutico.
            </p>
            <br />
            <br />
          </div>
          <div className="phrase">
            <p>
              "O homem está condenado a ser livre, condenado porque ele não
              criou a si, e ainda assim é livre.
            </p>
            <p>
              Pois tão logo é atirado ao mundo, torna-se responsável por tudo
              que faz."
            </p>
            <h5>Jean-Paul Sartre</h5>
          </div>
        </div>
        <div className="aboutRight">
          <img src={girasoll} alt="" />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
