import React from 'react';

export const ZaptBadge = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium"
      >
        Made on ZAPT
      </a>
    </div>
  );
};