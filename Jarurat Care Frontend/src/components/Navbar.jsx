import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-teal-600 font-bold text-xl">JC</span>
          </div>
          <h1 className="text-2xl font-bold">Jarurat Care</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link 
            to="/" 
            className={`pb-1 ${location.pathname === '/' ? 'font-bold border-b-2 border-white' : 'hover:opacity-80'}`}
          >
            Home
          </Link>
          <Link 
            to="/patients" 
            className={`pb-1 ${location.pathname === '/patients' ? 'font-bold border-b-2 border-white' : 'hover:opacity-80'}`}
          >
            Patients
          </Link>
          <Link 
            to="/about" 
            className={`pb-1 ${location.pathname === '/about' ? 'font-bold border-b-2 border-white' : 'hover:opacity-80'}`}
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className={`bg-white h-0.5 w-6 rounded transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`bg-white h-0.5 w-6 rounded my-1.5 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`bg-white h-0.5 w-6 rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-teal-700 px-4 py-3">
          <Link 
            to="/" 
            className={`block py-2 ${location.pathname === '/' ? 'font-bold' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/patients" 
            className={`block py-2 ${location.pathname === '/patients' ? 'font-bold' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Patients
          </Link>
          <Link 
            to="/about" 
            className={`block py-2 ${location.pathname === '/about' ? 'font-bold' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;