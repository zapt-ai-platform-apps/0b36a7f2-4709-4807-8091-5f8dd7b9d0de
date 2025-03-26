import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Tamil Nadu Entrepreneur Guide</h3>
            <p className="text-gray-300">
              A comprehensive resource for aspiring entrepreneurs in Tamil Nadu,
              especially designed for Naan Mudhalvan students from government schools and colleges.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/business-basics" className="text-gray-300 hover:text-white">Business Basics</Link></li>
              <li><Link to="/startup-guide" className="text-gray-300 hover:text-white">Startup Guide</Link></li>
              <li><Link to="/funding" className="text-gray-300 hover:text-white">Funding Options</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white">TN Resources</Link></li>
              <li><Link to="/local-businesses" className="text-gray-300 hover:text-white">Local Businesses</Link></li>
              <li><Link to="/tools" className="text-gray-300 hover:text-white">Business Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <p className="text-gray-300 mb-2">
              For support and information on entrepreneurship in Tamil Nadu
            </p>
            <p className="text-gray-300">
              <a href="https://startuptn.in/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                Visit StartupTN
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Tamil Nadu Entrepreneur Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};