import React from 'react';
import { motion } from 'framer-motion';

export const ResourceCard = ({ title, organization, description, link, imageUrl, delay = 0 }) => {
  return (
    <motion.div 
      className="card flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={organization} 
          className="w-full h-32 object-cover rounded-t-xl mb-4" 
          data-image-request={organization ? `${organization} office building or logo` : "Office building"}
        />
      )}
      
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        {organization && <p className="text-gray-600 font-medium mb-2">{organization}</p>}
        <p className="text-gray-700 mb-3">{description}</p>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 font-medium hover:text-blue-700 transition"
          >
            Visit Website →
          </a>
        )}
      </div>
    </motion.div>
  );
};