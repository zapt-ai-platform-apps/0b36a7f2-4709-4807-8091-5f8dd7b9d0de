import React from 'react';
import { motion } from 'framer-motion';

export const StepCard = ({ number, title, description, delay = 0 }) => {
  return (
    <motion.div 
      className="flex items-start bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex-shrink-0 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full mr-4 font-bold">
        {number}
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};