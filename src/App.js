import React from "react";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card/>
    </div>
  );
}

export default App;
