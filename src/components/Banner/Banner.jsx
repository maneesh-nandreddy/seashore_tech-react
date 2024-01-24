import React from "react";
import BannerImg from "../../assets/achiev/coporate_training.jpg";
import { GrTime } from "react-icons/gr";
import { GrBook } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiTreeGrowth } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            "Empower Your Skills with Us."
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Seashore Technology's Corporate Training blends precision and scalability, offering engaging online sessions with tailored content. 
              With effortless accessibility and progress monitoring tools, empower your workforce for customized and impactful skill development.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrTime className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Personalized Events</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Customized Initiatives</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrBook className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Tailored programs</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiTreeGrowth className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Individualized Career Forums</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
