// Navbar.jsx
import React, { useState } from "react";
import Logo from "../../assets/seashore_logo.png";
import DarkMode from "./DarkMode";
import About from "../About/About";
import Hero from "../Hero/Hero2";
import Clients from "../Clients/Clients";
import Achievements from "../Achievements/Achievements";
import Services from "../Seashoreservices/Services";
import Ptecenter from "../PTEcenter/Ptecenter";
import { IoMdSearch } from "react-icons/io";
import { IoIosContact } from "react-icons/io";

const Navbar = ({ handleOrderPopup }) => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* ... existing code ... */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              SEASHORE TECHNOLOGIES
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search for courses"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Contact us
              </span>
              <IoIosContact className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          <li>
            <button onClick={() => navigateToSection("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => navigateToSection("about")}>About us</button>
          </li>
          <li>
            <button onClick={() => navigateToSection("clients")}>Clients</button>
          </li>
          <li>
            <button onClick={() => navigateToSection("achievements")}>Achievements</button>
          </li>
          {/* added a new navigation to pte center page */}
          <li>
            <button onClick={() => navigateToSection("ptecenter2")}>PTE Test Center</button>
          </li>
          <li>
            <button onClick={() => navigateToSection("services")}>Services</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
