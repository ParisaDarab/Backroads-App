import React from "react";

import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import About from "./components/About";
function App() {
  return (
    <>
      <body>
        <Navbar />

        <Hero />

       <About/>

        <Services />

        <Tours />

        <Footer />
      </body>
    </>
  );
}

export default App;
