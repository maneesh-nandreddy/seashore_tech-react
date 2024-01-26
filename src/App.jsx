import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Ptecenter from './components/PTEcenter/Ptecenter';
import Services from './components/Seashoreservices/Services';
import Clients from './components/Clients/Clients';
import Achievements from './components/Achievements/Achievements';
import Homepage from './components/Homepage/index';

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* Only render Navbar if the current route is not /ptecenter */}
      {/* {window.location.pathname !== '/ptecenter' && (
        <Navbar handleOrderPopup={handleOrderPopup} />
      )} */}
      <Navbar handleOrderPopup={handleOrderPopup} />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/ptecenter" element={<Ptecenter />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;