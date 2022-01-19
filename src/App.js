import React from "react";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map(code=><Card img={code.coverImg} rating={code.stats.rating} reviewCount={code.stats.reviewCount} location={code.location} title={code.title} price={code.price} />)
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <div className="cards">
      {cards}
      </div>
    </div>
  );
}

export default App;
