import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20 mb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Compassionate Healthcare for All
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering communities through accessible healthcare services, 
            medical support, and sustainable health solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/patients" 
              className="bg-white text-teal-700 hover:bg-teal-50 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Our Patients
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-700 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Donate Now
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 mb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">5,000+</div>
              <div className="text-gray-600">Patients Helped</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">200+</div>
              <div className="text-gray-600">Volunteers</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-600">Communities</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">15</div>
              <div className="text-gray-600">Years Serving</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced */}
      <section className="container mx-auto px-6 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">Why Choose Jarurat Care?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to making healthcare accessible and affordable for everyone, 
            especially the most vulnerable members of our society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
            <div className="text-teal-600 text-5xl mb-6">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Patients</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We've helped thousands of patients access the care they need to live healthier, 
              more productive lives. Each patient receives personalized attention and comprehensive care.
            </p>
            <Link to="/patients" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors">
              View Patients 
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
            <div className="text-teal-600 text-5xl mb-6">
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To provide quality healthcare services to underserved communities with dignity, 
              respect, and compassion. We believe healthcare is a fundamental human right.
            </p>
            <Link to="/about" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors">
              Learn More 
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-teal-500">
            <div className="text-teal-600 text-5xl mb-6">
              <i className="fas fa-stethoscope"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Services</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From routine checkups to specialized treatments, mental health support, 
              and emergency care - we offer comprehensive medical services for all ages.
            </p>
            <a href="#services" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors">
              View Services 
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-teal-50 py-16 mb-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-teal-700 text-center mb-12">Our Healthcare Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-heartbeat', title: 'Primary Care', desc: 'Comprehensive primary healthcare services for families and individuals' },
              { icon: 'fa-baby', title: 'Maternal Care', desc: 'Prenatal, delivery, and postnatal care for mothers and newborns' },
              { icon: 'fa-pills', title: 'Medication Support', desc: 'Access to essential medicines and prescription assistance' },
              { icon: 'fa-brain', title: 'Mental Health', desc: 'Counseling and mental health support services' },
              { icon: 'fa-ambulance', title: 'Emergency Care', desc: '24/7 emergency medical services and crisis intervention' },
              { icon: 'fa-user-md', title: 'Specialist Consultations', desc: 'Access to specialist doctors and medical experts' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-teal-600 text-3xl mb-4">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16 rounded-2xl mb-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can transform lives and build healthier communities. 
            Together, we can ensure everyone receives the care they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-700 hover:bg-teal-50 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Volunteer With Us
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-700 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Make a Donation
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-700 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white mb-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-teal-700 text-center mb-12">Stories of Hope</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Aisha Rahman", story: "Jarurat Care saved my daughter's life when we had nowhere else to turn. The doctors and staff treated us like family." },
              { name: "Raj Kumar", story: "As a volunteer, I've witnessed the incredible impact of Jarurat Care. Every day we're making a real difference in people's lives." },
              { name: "Dr. Sarah Johnson", story: "Working with Jarurat Care has been the most rewarding experience of my medical career. We're bringing hope to those who need it most." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500">
                <div className="text-teal-600 text-2xl mb-4">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.story}"</p>
                <div className="font-semibold text-teal-700">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center">
        <h3 className="text-3xl font-bold text-teal-700 mb-4">Ready to Make an Impact?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
          Whether you can give your time, skills, or financial support, every contribution 
          helps us reach more people in need of medical care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 shadow-lg">
            Donate Now
          </button>
          <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;