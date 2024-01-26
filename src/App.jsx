import React from "react";
import Hero from "./components/Hero/Hero2";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Ptecenter from "./components/PTEcenter/Ptecenter";
import Services from "./components/Seashoreservices/Services";
import ManagingDirector from "./components/About/director";
import Clients from "./components/Clients/Clients";
import Achievements from "./components/Achievements/Achievements";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup} />
      <About/>
      <Clients/>
      <Achievements/>
      <Services/>
      <Banner />
      {/* <Ptecenter/> */}
      <Subscribe />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
