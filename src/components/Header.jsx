import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

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
            <img src="https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw1fHx5b3VuZyUyMFRhbWlsJTIwZW50cmVwcmVuZXVycyUyMHdvcmtpbmclMjB0b2dldGhlciUyMGluJTIwYSUyMG1vZGVybiUyMG9mZmljZSUyMGluJTIwQ2hlbm5haSUyQyUyMEluZGlhfGVufDB8fHx8MTc0Mjk3Njg0OXww&ixlib=rb-4.0.3&q=80&w=1080" 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=48&height=48" 
              alt="Logo" 
              className="w-8 h-8 mr-2"
            />
        </motion.div>
      </div>
    </div>
  );
};