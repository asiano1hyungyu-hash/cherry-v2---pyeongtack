import React from 'react';

export const CherryIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-6 h-6", 
  size 
}) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      {/* Stems */}
      <path 
        d="M17 3.5C14.5 3.5 11 6.5 8.5 12" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round"
      />
      <path 
        d="M17 3.5C16 6.5 15.5 8.5 15.5 12" 
        stroke="currentColor" 
        strokeWidth="1.8" 
        strokeLinecap="round"
      />
      {/* Leaf */}
      <path 
        d="M17 3.5C19.5 3 21.5 4.5 21.5 6C19.5 6.5 17.5 5 17 3.5Z" 
        fill="currentColor" 
        opacity="0.8"
      />
      {/* Left Cherry */}
      <circle 
        cx="7.5" 
        cy="15.5" 
        r="4.5" 
        fill="currentColor"
      />
      <circle 
        cx="6" 
        cy="14" 
        r="1.2" 
        fill="#FFFFFF" 
        opacity="0.6"
      />
      {/* Right Cherry */}
      <circle 
        cx="16" 
        cy="15.5" 
        r="4.5" 
        fill="currentColor"
      />
      <circle 
        cx="14.5" 
        cy="14" 
        r="1.2" 
        fill="#FFFFFF" 
        opacity="0.6"
      />
    </svg>
  );
};
