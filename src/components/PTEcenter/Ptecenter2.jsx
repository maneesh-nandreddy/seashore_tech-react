import React from 'react';

function Ptenceter2() {
  return (
    <div id='ptecenter' className='fixed w-full h-full bg-cover bg-center'>
      {/* Background Image */}
      <div
        className='w-full h-full absolute top-0 left-0'
        style={{
          backgroundImage: `url('https://th.bing.com/th/id/OIP.tf3ZR7OB-JpCuORjAeMlhAHaDn?rs=1&pid=ImgDetMain')`, // Replace with your image path
        }}
      ></div>

      {/* Content */}
      <div className='relative z-10 text-white p-8'>
        {/* Title */}
        <h1 className='text-4xl font-bold mb-4'>Prometric Test Center</h1>
        {/* Quotation */}
        <p className='italic text-lg mb-8'>
          "Here is the test center you're looking for."
        </p>

        {/* Section 1 */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>What is a Prometric center?</h2>
          <p>
            Here is a brief description of what a Prometric center is. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. ...
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className='text-2xl font-bold mb-4'>
            What exams are conducted by Pearson Vue?
          </h2>
          <p>
            Pearson Vue conducts a variety of exams, including Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ptenceter2;
