import React from 'react';

const About = () => {
  return (
    <div className="fade-in">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-bold text-teal-700 mb-6">About Jarurat Care</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Jarurat Care is a non-profit organization dedicated to providing healthcare services to underserved communities. 
            Founded in 2010, we have been working tirelessly to ensure that everyone has access to quality medical care 
            regardless of their socioeconomic status.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide compassionate, quality healthcare to those in need, with dignity and respect. 
                We believe that access to healthcare is a fundamental human right, not a privilege.
              </p>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A world where everyone has access to the healthcare they need to live healthy, productive lives, 
                regardless of their ability to pay.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-teal-700 mb-4">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-teal-100 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">5,000+</div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">12</div>
              <div className="text-gray-600">Communities</div>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
            <div className="bg-white border border-teal-100 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">8</div>
              <div className="text-gray-600">Medical Programs</div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-teal-700 mb-4">Our Team</h3>
          <p className="text-gray-600 mb-6">
            Our dedicated team of healthcare professionals, volunteers, and staff work tirelessly to deliver 
            quality care to our patients. From doctors and nurses to administrative staff and community health workers, 
            everyone at Jarurat Care is committed to making a difference in the lives of those we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;