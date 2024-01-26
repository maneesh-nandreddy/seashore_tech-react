import React from "react";
import Logo from "../../assets/seashore_logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaMailchimp,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
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
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid grid-cols-3 pb-44 py-8 px-4">
          {/* company details */}
          <div>
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={Logo} alt="" className="max-w-[50px]" />
              SEASHORE TECHNOLOGIES PVT LTD
            </h1>
            <p>
              Learn Together, Grow Forever!!
            </p>
          </div>
          {/* Footer Links */}
          <div className="ml-28">
            <ul className="flex flex-col gap-3 text-xl">
              {FooterLinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className=""
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* social links */}
          <div>
            <div className="flex items-center gap-3">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="#">
                <FaMailchimp className="text-3xl" />
              </a>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-5xl" />
                <p>RMWJ+Q3X, Shantipura Main Rd, Phase 2, Electronic City, Bengaluru, Karnataka 560100</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 99160 37278</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
