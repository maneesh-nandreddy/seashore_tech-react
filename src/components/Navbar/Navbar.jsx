import React from "react";
import Logo from "../../assets/seashore_logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { IoIosContact } from "react-icons/io";

const navLinks = [
  {
    id: 1,
    link: "/",
    name: "Home",
  },
  {
    id: 2,
    link: "about",
    name: "About us",
  },
  {
    id: 3,
    link: "clients",
    name: "Clients",
  },
  {
    id: 4,
    link: "achievements",
    name: "Achievements",
  },
  {
    id: 5,
    link: "ptecenter",
    name: "PTE Test Center",
  }
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

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
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
                Contact Us
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
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {navLinks.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="/services" className="flex items-center gap-[2px] py-2">
              Services
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute border dark:border-gray-500 z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-900 p-2 text-black dark:text-white shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
