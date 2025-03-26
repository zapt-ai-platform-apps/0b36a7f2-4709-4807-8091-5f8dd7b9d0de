import React from 'react';
import { motion } from 'framer-motion';

export const InfoPanel = ({ title, children, bg = "bg-blue-50", titleColor = "text-blue-700", delay = 0 }) => {
  return (
    <motion.div 
      className={`${bg} p-6 rounded-lg shadow-sm`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className={`text-xl font-bold mb-3 ${titleColor}`}>{title}</h3>
      <div className="text-gray-700">
        {children}
      </div>
    </motion.div>
  );
};