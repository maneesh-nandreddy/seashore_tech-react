// Navbar.jsx
import React, { useState } from "react";
import Logo from "../../assets/seashore_logo.png";
import DarkMode from "./DarkMode";
import { IoMdSearch } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { test_center } from "../PTEcenter/test_center";
import Ptecenter from "../PTEcenter/Ptecenter";
const Navbar = ({ handleOrderPopup }) => {
  const [activeNav, setActiveNav] = useState("#");
  const [active, setActive] = useState("");

  const navLinks = [
    {
      id: "/",
      name: "Home",
    },
    {
      id: "#about",
      name: "About us",
    },
    {
      id: "#clients",
      name: "Clients",
    },
    {
      id: "#achievements",
      name: "Achievements",
    },
    {
      id: {Ptecenter},
      name: "PTE Test Center",
    },
    {
      id: "#services",
      name: "Services",
    },
  ];

  const DropdownLinks = [
    {
      id: 1,
      name: "VIRTUALIZATION & APPLICATION DELIVERY",
      link: "/#",
    },
    {
      id: 2,
      name: "CLOUD Design",
      link: "/#",
    },
    {
      id: 3,
      name: "ENTERPRISE COMPUTING",
      link: "/#",
    },
    {
      id: 4,
      name: "NETWORKING",
      link: "/#",
    },
    {
      id: 5,
      name: "DIGITAL ENTERPRISE SERVICES",
      link: "/#",
    },
    {
      id: 6,
      name: "More..",
      link: "/#",
    },
  ];

  const [showPtecenter, setShowPtecenter] = useState(false);

  const handleButtonClick = () => {
    window.open("", "_blank");
  };

  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
      <div data-aos="zoom-in" className="flex justify-center ">
        {/* <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.name ? "text-red-500" : "text-secondary"
              } hover:text-red-500 text-[18px] font-medium cursor-pointer`}
              onclick = {() => setActiveNav(link.name)}
            >
              <a href={`${link.id}`} onClick={() => setActiveNav(`${link.id}`)} className={activeNav === '#' ? 'active' : ''}>{link.name}</a>
            </li>
          ))}
        </ul> */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.name ? "text-red-500" : "text-secondary"
              } hover:text-red-500 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActiveNav(link.name)}
            >
              <a
                href={link.id}
                onClick={() => setActiveNav(link.name)}
                className={activeNav === "#" ? "active" : ""}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* <div>
          <button onClick={handleButtonClick}>Open Ptecenter</button>
          <Ptecenter />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
