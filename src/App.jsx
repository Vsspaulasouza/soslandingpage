import React from "react";
import "./reset.scss";
import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Requirements from "./components/requirements/Requirements";
import Quotes from "./components/quotes/Quotes";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

function App() {
  const INTERNAL_LINKS = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const HREF = event.currentTarget.getAttribute("href");
    const SECTION = document.querySelector(HREF);
    SECTION.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  INTERNAL_LINKS.forEach((link) =>
    link.addEventListener("click", scrollToSection)
  );

  return (
    <>
      <Header />
      <About />
      <Features />
      <Requirements />
      <Quotes />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
