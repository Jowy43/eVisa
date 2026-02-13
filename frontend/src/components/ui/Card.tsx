import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', padding = '24px', style, ...props }) => {
  return (
    <div 
      className={`card ${className}`}
      style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: padding,
        border: '1px solid var(--color-border)',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};
