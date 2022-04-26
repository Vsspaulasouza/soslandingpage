import React from "react";
import "./reset.scss";
import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Requirements from "./components/requirements/Requirements";
import Quotes from "./components/quotes/Quotes";

function App() {
  return (
    <>
      <Header />
      <About />
      <Features />
      <Requirements />
      <Quotes />
    </>
  );
}

export default App;
