import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="fade-in">
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="text-center py-12">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">Welcome to Jarurat Care</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Providing compassionate healthcare services to those in need. Our mission is to ensure 
            everyone has access to quality medical care regardless of their circumstances.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="text-teal-600 text-4xl mb-4">
            <i className="fas fa-users"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Patients</h3>
          <p className="text-gray-600 mb-4">
            We've helped thousands of patients access the care they need to live healthier lives.
          </p>
          <Link to="/patients" className="text-teal-600 font-medium hover:underline">
            View Patients →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="text-teal-600 text-4xl mb-4">
            <i className="fas fa-hand-holding-heart"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 mb-4">
            To provide quality healthcare services to underserved communities with dignity and respect.
          </p>
          <Link to="/about" className="text-teal-600 font-medium hover:underline">
            Learn More →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="text-teal-600 text-4xl mb-4">
            <i className="fas fa-stethoscope"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Services</h3>
          <p className="text-gray-600 mb-4">
            We offer a wide range of medical services from routine checkups to specialized treatments.
          </p>
          <a href="#services" className="text-teal-600 font-medium hover:underline">
            View Services →
          </a>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold text-teal-700 mb-4">How You Can Help</h3>
        <p className="text-gray-600 mb-4">
          Jarurat Care relies on the generosity of donors and volunteers to continue our work. 
          Whether you can give your time, skills, or financial support, every contribution makes a difference.
        </p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
          Get Involved
        </button>
      </section>
    </div>
  );
};

export default Home;