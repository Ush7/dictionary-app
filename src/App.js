import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";
import "bootstrap";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h4>What word do you want to look up?</h4>
        </header>{" "}
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}
