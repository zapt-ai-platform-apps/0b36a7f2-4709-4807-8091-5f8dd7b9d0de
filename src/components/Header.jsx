import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Business Basics', path: '/business-basics' },
    { name: 'Startup Guide', path: '/startup-guide' },
    { name: 'Funding Options', path: '/funding' },
    { name: 'TN Resources', path: '/resources' },
    { name: 'Local Businesses', path: '/local-businesses' },
    { name: 'Business Tools', path: '/tools' },
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl md:text-2xl font-bold flex items-center">
            <img src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
              alt="Logo" 
              className="w-8 h-8 mr-2"
            />
            <span>Yours Friendly</span>
          </Link>
          
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none cursor-pointer"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          <nav className="hidden lg:flex lg:items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition ${
                  location.pathname === item.path
                    ? 'text-white border-b-2 border-white'
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4"
          >
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`py-2 text-base font-medium transition ${
                    location.pathname === item.path
                      ? 'text-white font-semibold'
                      : 'text-blue-100 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};