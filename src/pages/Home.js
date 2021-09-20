import React from "react";
import "../App.css";
import Cards from "../components/Cards/Cards";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
