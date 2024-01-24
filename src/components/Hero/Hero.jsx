import React from "react";
import Image1 from "../../assets/slider/img1.jpg";
import Image2 from "../../assets/slider/img3.jpg";
import Image3 from "../../assets/slider/img4.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Innovate Together",
    description:
      "Collaborate innovatively with us to transform ideas into impactful solutions and drive collective progress.Join a community where diverse perspectives converge, fostering innovation that shapes a better future for all.",
  },
  {
    id: 2,
    img: Image2,
    title: "Expand Continuously",
    description:
      "Experience continuous expansion in knowledge, opportunities, and horizons for uninterrupted personal and professional growth. Our platform provides a supportive environment where you can explore new avenues, enrich your skills, and embrace the possibilities of a boundless future.",
  },
  {
    id: 3,
    img: Image3,
    title: "Develop Impactfully",
    description:
      "Join us in impactful development initiatives, where your efforts drive positive change and meaningful contributions to society.Be part of a community dedicated to creating solutions that address real-world challenges, making a lasting impact on individuals and communities alike.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      {/* The rest of your code remains unchanged */}

      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="sm:flex">
              <div className="sm:w-1/2">
                {/* image section */}
                <div className="relative z-10">
                  <img
                    src={data.img}
                    alt=""
                    className="w-full h-auto sm:h-[450px] object-cover mx-auto"
                  />
                </div>
              </div>
              <div className="sm:w-1/2 p-4">
                {/* text content section */}
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                >
                  {data.title}
                </h1>
                {/* Show description only on larger screens */}
                <p className="text-sm hidden sm:block">{data.description}</p>
                <div className="mt-4">
                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  >
                    See more!!
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;