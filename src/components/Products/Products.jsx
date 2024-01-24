import React from "react";
import Img1 from "../../assets/women/LIDKAR.png";
import Img2 from "../../assets/women/CROPPED_BWSSB.jpg";
import Img3 from "../../assets/women/windmill.jpg";
import Img4 from "../../assets/women/stdevelopment.png";
import Img5 from "../../assets/women/women5.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "LIDKAR",
    rating: 4.8,
    color: "Seashore Technologies spearheaded a revolutionary digitalization initiative at the Leather Industries Department of Karnataka, streamlining processes and paving the way for a more agile and technologically advanced department.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Bangalore Water Supply and Sewerage Board",
    rating: 4.5,
    color: "We innovatively deployed a state-of-the-art water monitoring system for BWSSB, optimizing usage and ensuring sustainable practices through advanced technology. Our commitment drives impactful solutions for resource efficiency.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Expansion into Renewable Energy",
    rating: 4.7,
    color: "Ventured into the import and export of windmills, a significant stride towards contributing to renewable energy resources. Project approved by KIADB, showcasing our commitment to sustainable and innovative solutions.",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Web Portal for the ST Department of Karnataka",
    rating: 4.6,
    color: "In our commitment to transparency and efficiency, we developed a state-of-the-art web portal for the ST Department of Karnataka. This platform stands as a testament to our dedication to providing seamless online application benefits.",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Recognized by the Department Govt. Karnatka",
    rating: 4.5,
    color: "Crafted a web application for Karnataka's Department of Women and Child Welfare, fostering social welfare initiatives. Our development aims to enhance services and support the well-being of women and children in the region.",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-12 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm text-primary">
          Transformative services, satisfied clients.
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Client Success Stories
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Delivering excellence to government sectors in Karnataka and beyond, fostering successful client partnerships.
        </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Check our Other Clients!!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
