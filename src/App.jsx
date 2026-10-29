import React, { useEffect } from "react"; 
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'

import AOS from "aos";
import "aos/dist/aos.css";



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 50,
      mirror: false,
    });

    // Refresh positions after images load
    const refreshAOS = () => AOS.refreshHard();

    window.addEventListener("load", refreshAOS);

    return () => {
      window.removeEventListener("load", refreshAOS);
    };
  }, []);
  
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>


      <Footer />



    </>

  )
}

export default App
