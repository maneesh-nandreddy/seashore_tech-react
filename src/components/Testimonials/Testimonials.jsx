import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/testimonials/lidkar.jpg";
import Img2 from "../../assets/testimonials/bwssb.jpg";
import Img3 from "../../assets/testimonials/kiadb.png";
import Img4 from "../../assets/testimonials/st.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "LIDKAR",
    text: "Seashore Technologies, led a groundbreaking digitalization initiative for the Leather Industries Department of Karnataka. Their strategic approach streamlined intricate processes, fostering efficiency and paving the way for a department that is not only agile but also technologically advanced.",
    // img: "../../assets/testimonials/lidkar.jpg",
    img: Img1,
  },
  {
    id: 2,
    name: "BWSSB",
    text: "We innovatively deployed a state-of-the-art water monitoring system for BWSSB, optimizing usage and ensuring sustainable practices through advanced technology. Seashore Technologies' commitment drives impactful solutions for resource efficiency.",
    // img: "https://th.bing.com/th/id/OIP.xcoqd_iCN2Blog07fO16aAAAAA?rs=1&pid=ImgDetMain",
    img: Img2,
  },
  {
    id: 3,
    name: "Renewable Energy Ventures",
    text: "Ventured into the import and export of windmills, a significant stride towards contributing to renewable energy resources. Project approved by KIADB, showcasing Seashore Technologies' commitment to sustainable and innovative solutions."

    ,
    img: Img3,
  },
  {
    id: 4,
    name: "ST Department of Karnataka",
    text: "In our commitment to transparency and efficiency, Seashore Technologies developed a state-of-the-art web portal for the ST Department of Karnataka. This platform stands as a testament to their dedication to providing seamless online application benefits.",
    img: Img4,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Customer Reviews
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
