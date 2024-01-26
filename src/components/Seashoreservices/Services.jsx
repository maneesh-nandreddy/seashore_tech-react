import React from 'react';
import Bgimg from "../../assets/SERVICES/bg.jpg";
import virtuBgImage from "../../assets/SERVICES/virtu.jpg";
import virtuallargedevices from "../../assets/SERVICES/virtuallarge.jpg"
import cardsbgImage from "../../assets/SERVICES/cards_bg.jpg"

const Services = () => {
    const smallScreen = window.innerWidth <= 768;

    const backgroundImageStyle = {
        backgroundImage: `url(${Bgimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.8,
        };
    const virtuBgStyle2 = {
        backgroundImage2: `url(${virtuallargedevices})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5,
        };
    const virtuBgStyle = {
        backgroundImage: `url(${virtuBgImage})`,
        opacity: 0.5,
        };
    const cardsbg = {
        backgroundImage2: `url(${cardsbgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5,
        };
    
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-20" id='services'>
    {/* <div className="bg-gray-100 dark:bg-gray-800 py-20"> */}
      <div data-aos="fade-up" data-aos-delay="100" className="container mx-auto">
        <div  className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary">OUR SERVICES</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-red-500" >
          {/* Virtualization & Application Delivery */}
          {/* <div className="border p-4 bg-white dark:bg-gray-900 rounded-lg" style={smallScreen ? virtuBgStyle : virtuBgStyle2}> */}
          <div className="border p-4 bg-white dark:bg-gray-900 rounded-lg " style={cardsbg}>
            {/* <h4 className="text-xl font-color-white font-bold mb-4">VIRTUALIZATION & APPLICATION DELIVERY</h4> */}
            <h4 class="text-xl font-bold mb-4">VIRTUALIZATION & APPLICATION DELIVERY</h4>
            <hr className="mb-4 "/>
                <p><a href="">Server Virtualization </a></p>
                <p><a href="">Network Virtualization</a></p>
                <p><a href="">Storage Virtualization</a></p>
                <p><a href="">VDI (Virtualized Desktop Infrastructure)</a></p>
                <p><a href="">Application Delivery Networking</a></p>
                <p><a href="">Content Delivery Network</a></p>
                <p><a href="">Private Cloud and Hybrid Cloud</a></p>
                <p><a href="">GPU Virtualization</a></p>
          </div>

          {/* Cloud */}
          <div className="border p-4 bg-white dark:bg-gray-900 rounded-lg" style={cardsbg}>
            <h4 className="text-xl font-bold mb-4">CLOUD</h4>
            <hr className="mb-4" />
            <p><a href="">Cloud Consulting </a></p>
            <p><a href="">Private Cloud and Hybrid Cloud</a></p>
            <p><a href=""> Cloud Implementation</a></p>
            <p><a href="">Cloud Security</a></p>
            <p><a href="">Cloud Managed Services</a></p>
            <p><a href="">Cloud lifecycle Services</a></p>
            <p><a href="">Desktop as a Service</a></p>
            <p><a href="">Microsoft Azure</a></p>
          </div>

          {/* Enterprise Computing */}
          <div className="border p-4 bg-white dark:bg-gray-900 rounded-lg"style={virtuBgStyle}>
            <h4 className="text-xl font-bold mb-4">ENTERPRISE COMPUTING</h4>
            <hr className="mb-4" />
            <p><a href="">Hyper-converged Infrastructure</a></p>
            <p><a href="">Enterprise Storage</a></p>
            <p><a href="">All Flash</a></p>
            <p><a href="">Storage Virtualization</a></p>
            <p><a href="">Business Continuity and Disaster Recovery Solutions</a></p>
            <p><a href="">Fault Tolerant Solutions</a></p>
            <p><a href="">ScaleIO Software Defined Storage</a></p>
            <p><a href="">PBBA</a></p>
            {/* ... Add more items */}
          </div>

          {/* Training Services */}
          <div className="border p-4 bg-white dark:bg-gray-900 rounded-lg"style={virtuBgStyle}>
            <h4 className="text-xl font-bold mb-4">TRAINING SERVICES</h4>
            <hr className="mb-4" />
            <p><a href="">Technology Training</a></p>
            <p><a href="">Train and Deploy</a></p>
          </div>

          {/* Enterprise Software Services */}
          <div className="border p-4 bg-white dark:bg-gray-900 rounded-lg" style={virtuBgStyle}>
            <h4 className="text-xl font-bold mb-4">ENTERPRISE SOFTWARE SERVICES</h4>
            <hr className="mb-4" />
            <p><a href="">Commvault</a></p>
            <p><a href="">Seclore</a></p>
            <p><a href="">Forcepoint</a></p>
            <p><a href="">Software Services</a></p>
          </div>

          {/* Digital Enterprise Services */}
          <div className="border p-4 bg-white dark:bg-gray-900 rounded-lg" style={virtuBgStyle}>
            <h4 className="text-xl font-bold mb-4">DIGITAL ENTERPRISE SERVICES</h4>
            <hr className="mb-4" />
            <p><a href="">IOT (Internet of things)</a></p>
            <p><a href="">Cloud Managed Services</a></p>
            <p><a href="">Website development</a></p>
            <p><a href="">Android app development</a></p>
          </div>

          {/* Digitalization of Govt. */}
          {/* <div className="border p-4 bg-white dark:bg-gray-900 rounded-lg">
            <h4 className="text-xl font-bold mb-4">DIGITALIZATION OF GOVT.</h4>
            <hr className="mb-4" />
            <p><a href="">Website Development</a></p>
            <p><a href="">Software services</a></p>
          </div> */}

          {/* Networking */}
          <div className="border p-4 bg-white dark:bg-gray-900 rounded-lg" style={virtuBgStyle}>
            <h4 className="text-xl font-bold mb-4">NETWORKING</h4>
            <hr className="mb-4" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h6 className="text-lg font-bold mb-2">Enterprise Networking</h6>
                <p><a href="">Routing & Switching</a></p>
                <p><a href="">Wi-Fi Networks</a></p>
              </div>
              <div>
                <h6 className="text-lg font-bold mb-2">WAN Solutions</h6>
                <p><a href="">WAN Optimization</a></p>
                <p><a href="">Application Delivery</a></p>
                <p><a href="">Network Virtualization</a></p>
              </div>
            </div>
          </div>

          {/* Other Services */}
          <div className="border p-4 bg-white dark:bg-gray-900 rounded-lg" style={virtuBgStyle}>
            <h4 className="text-xl font-bold mb-4">OTHER SERVICES</h4>
            <hr className="mb-4" />
            <p><a href="">Contract Staffing</a></p>
            <p><a href="">Recruitment</a></p>
            <p><a href="">Recruitment process Outsourcing</a></p>
            <p><a href="">Payroll</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
