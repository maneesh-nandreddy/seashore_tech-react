import React from 'react';
import sirImage from "../../assets/hero/sagarsir.jpg";

const ManagingDirector = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-2">
      <div className="container mx-auto">
        <div className="expert">
          <div className="servc">
            <div className="flex justify-between">
              <div>
                <br />
                <h2 className="text-3xl font-bold">Sagar A</h2>
                <h4 className="text-xl">Managing Director</h4>
              </div>
              <div>
                <img src={sirImage} alt="Sagar A" className="h-32" />
              </div>
            </div>
            <br />
            <p>
              Sagar A, the Managing Director of Seashore Technologies Pvt Ltd, is a visionary entrepreneur with an MBA in Marketing and a degree in Mechanical Engineering. He founded SGR Technologies in 2015, offering hardware, networking, and software courses.
              <br />
              In 2016, he expanded into Seashore Technologies, initially establishing the company as an ERP product-based organization. Later, he strategically expanded its services to include the development of websites for government initiatives, showcasing adaptability and innovation in the evolving technology landscape.
            </p>
          </div>
          <div className="sir" style={{ paddingTop: '3%' }}>
            {/* Add any additional content or components related to the "sir" section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagingDirector;
