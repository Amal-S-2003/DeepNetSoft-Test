import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Buttons from "../components/Buttons";
import MiddleBanner from "../components/MiddleBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Buttons />
      <MiddleBanner />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
