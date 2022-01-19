import React from "react";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map(code=><Card key={code.id} {...code} />)
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
