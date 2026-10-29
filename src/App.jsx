import React, { useEffect } from "react"; 
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Faqs from './pages/Faqs'
import ScrollToTop from './component/ScrollToTop';
import FloatingButtons from './component/FloatingButtons';


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
      
        {/* AUTO SCROLL TO TOP ON ROUTE CHANGE */}
        <ScrollToTop />

      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-products" element={<Products />} />
        <Route path="/faqs" element={<Faqs/>} />
      </Routes>


      <Footer />
      <FloatingButtons/>



    </>

  )
}

export default App
