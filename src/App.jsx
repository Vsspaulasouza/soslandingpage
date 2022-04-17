import React from "react";
import "./reset.scss";
import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Features from "./components/features/Features";

function App() {
  return (
    <>
      <Header />
      <About />
      <Features />
    </>
  );
}

export default App;
