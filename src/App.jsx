import React from "react";
import Card from "./components/Card";
import { global } from "./styles/global.css";
import Car1 from "./img/car1.png";
import Car2 from "./img/car2.png";
import Car3 from "./img/car3.png";
import styled from "styled-components";

function App() {
  const options = {
    scale: 1.2,
    speed: 400,
    max: 100
  };

  return (
    <SectionCard className="global">
      <div className="container">
        <Card img={Car1} alt="Carros" title="Fuscão Azul" colorCircle="#413ac8" options={options}/>
        <Card img={Car2} alt="Carros" title="Fuscão Amarelo" colorCircle="#c6c250" options={options}/>
        <Card img={Car3} alt="Carros" title="Red Toyota GT86" colorCircle="#c6505b" options={options}/>
      </div>
    </SectionCard>
  );
}

const SectionCard = styled.section`
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 1200px;
    transform-style: preserve-3d;
  }
`;

export default App;
