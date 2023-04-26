import React from "react";

import Marketing from "../components/Home/Marketing";
import Features from "../components/Home/Features";
import Testimonial from "../components/Home/Testimonial";
import Happy from "../components/Home/Happy";
import Navbar from "../components/Navbar";
import Header from "./../components/Home/Header";
import Footer from './../components/Home/Footer';

function Home() {
  return (
    <div style={{ backgroundColor: "#004029" }}>
      <Navbar />
      <Header />
      <Marketing />
      <Features />
      <Testimonial />
      <Happy />
      <Footer />
    </div>
  );
}

export default Home;
