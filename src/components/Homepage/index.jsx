import React,{useState} from 'react'
import Banner from "../Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";
import Popup from "../Popup/Popup";
import About from "../About/About";
import Ptecenter from "../PTEcenter/Ptecenter";
import Services from "../Seashoreservices/Services";
import Clients from "../Clients/Clients";
import Achievements from "../Achievements/Achievements";
import Hero from "../Hero/Hero2";
import CustomerReviews from '../CustomerReviews/CustomerReviews'


const index = () => {
    const [orderPopup, setOrderPopup] = useState(false);
    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };
    return (
        <div>
            <Hero handleOrderPopup={handleOrderPopup} />
            <About />
            <Clients handleOrderPopup={handleOrderPopup} />
            <Achievements handleOrderPopup={handleOrderPopup} />
            <Ptecenter />
            <Services />
            <Banner />
            <CustomerReviews />
            <Subscribe />\
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
    )
}

export default index