import React from "react";
import Img1 from "../../assets/achiev/flexing.png";
import Img2 from "../../assets/achiev/elevate.png";
import Img3 from "../../assets/achiev/mou.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Youth Empowerment Job Fairs in Karnataka",
    description:
      "Initiated and conducted impactful job fairs in Karnataka, strategically emphasizing the development and empowerment of the state's vibrant youth, fostering opportunities for meaningful career advancement.",
  },
  {
    id: 2,
    img: Img2,
    title: "2019-20: Karnataka's Startup Elevate Award",
    description:
      "Seashore Technologies has secured the prestigious Startup Elevate Award, affirming our steadfast dedication to innovation and excellence in the technology landscape.",
  },
  {
    id: 3,
    img: Img3,
    title: "Aerospace Project MOU Signing with Dignitaries",
    description:
      "Signed MOU for our new aerospace project with the Government of Karnataka in the presence of Honorable Shri Rajnath Singh, Defence Minister of India, along with the Chiefs of the Indian Army, Air Force, and Navy, Admiral Karambir, on February 6, 2022.",
  },
  
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 pt-10 pb-50">
      <div className="container" >
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
          Embarking on endeavors that garnered notable recognition.
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          Milestones and Accomplishments
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          We have proudly extended our services to various government sectors in Karnataka, contributing to our rich tapestry of achievements.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  See more!!
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
