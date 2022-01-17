import React from "react";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card img="./images/katie-zaferes.png" rating="5.0" reviewCount={6} country="MEX" title="Life Lessons with Katie Zaferes" price={136}/>
    </div>
  );
}

export default App;
