import React, { useEffect } from 'react';
import '../../components/About/About.css';
import ManagingDirector from './director';

const About = () => {
  useEffect(() => {
    const dynamicTextWrapper = document.querySelector('.elementor-headline-text-wrapper');
    const dynamicTexts = dynamicTextWrapper.querySelectorAll('.elementor-headline-dynamic-text');

    let currentIndex = 0;

    const animateText = () => {
      dynamicTexts.forEach((text, index) => {
        text.classList.remove('elementor-headline-text-active');
        text.classList.add('elementor-headline-text-inactive');
      });

      dynamicTexts[currentIndex].classList.remove('elementor-headline-text-inactive');
      dynamicTexts[currentIndex].classList.add('elementor-headline-text-active');

      currentIndex = (currentIndex + 1) % dynamicTexts.length;
    };

    // Set up interval for text animation
    const intervalId = setInterval(animateText, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="container mx-auto p-4" id='about'>
      <h2 className="text-3xl font-bold mb-4">Welcome to Our Story</h2>
      <p className="text-gray-700">
        Seashore Technologies Private Limited is a Private incorporated on 01 December 2016 and a dynamic player at the intersection of Hardware and Networking Training, Website Development, and Android App Creation.
         Established as an Indian Non-Government Company, we operate as a private entity classified as a 'company limited by shares.' Our customized services are meticulously crafted to meet the unique needs of your business. Our spectrum of expertise includes empowering individuals through comprehensive Hardware and Networking Training, crafting engaging and functional Websites, and developing innovative Android Applications.
      </p>

      <div className="elementor-widget-container mt-8">
        <h2 className="text-3xl font-bold mb-4 elementor-headline elementor-headline-animation-type-slide">
          ◦ 
          <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
            <span className="elementor-headline-dynamic-text elementor-headline-text-inactive">&nbsp;&nbsp;&nbsp;Innovate&nbsp;</span>
            <span className="elementor-headline-dynamic-text elementor-headline-text-inactive"> Accelerate </span>
            <span className="elementor-headline-dynamic-text elementor-headline-text-inactive">&nbsp;&nbsp;&nbsp;Assure</span>
          </span>
        </h2>
      </div>
      <ManagingDirector/>
    </section>
  );
};

export default About;
