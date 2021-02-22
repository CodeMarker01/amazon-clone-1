import React from "react";
import Header from "./Header";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    //BEM
    <div className="app">
      {/* HEADER */}
      <Header />
      {/* HOME */}
      <Home />
    </div>
  );
}

export default App;
