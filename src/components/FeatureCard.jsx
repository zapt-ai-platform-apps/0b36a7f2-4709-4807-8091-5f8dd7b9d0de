import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const FeatureCard = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <motion.div
      className="card hover:translate-y-[-5px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex flex-col h-full">
        <div className="text-blue-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        {link && (
          <Link to={link} className="text-blue-600 font-medium hover:text-blue-700 transition mt-auto inline-block">
            Learn more →
          </Link>
        )}
      </div>
    </motion.div>
  );
};