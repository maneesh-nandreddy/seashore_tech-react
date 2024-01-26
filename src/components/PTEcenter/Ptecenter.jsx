import React from 'react';
import Img1 from "../../assets/test_center/img1.jpg";
import Img2 from "../../assets/test_center/img2.jpg";
import Img3 from "../../assets/test_center/img3.jpg";
import Img4 from "../../assets/test_center/img5.jpg";


const testCentersData = [
  { img:Img1, text: "Accreditation" },
  { img:Img2, text: "Facilities"},
  { img:Img3, text: "Security"},
  { img:Img4, text: "Support"},
]
function Ptecenter() {
  return (
    <div className="container mx-auto p-4" id='ptetestcenter'>
        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold p-5">
            PTE Test Center
            </h1>      
      <div data-aos="fade-up" className="mb-8">
        <p>
          Welcome to our PTE Test Center! The PTE (Pearson Test of English) is a standardized English language proficiency test that assesses your speaking, writing, reading, and listening skills.
        </p>
        <p>
          Our test center offers various types of PTE exams, including [mention types of tests].
        </p>
      </div>
      
      <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {testCentersData.map((center, index) => (
        <div key={index} className="relative overflow-hidden group">
            <img
                src={center.img}
                alt={`Test Center ${index + 1}`}
                className="w-full h-auto transition-transform transform duration-300 ease-in-out group-hover:scale-110"
            />
        <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {center.text}
        </div>
        </div>
        ))}
        </div>
    </div>
  );
}

export default Ptecenter;
