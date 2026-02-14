import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', padding = '24px', style, ...props }) => {
  return (
    <div 
      className={`card hover-lift ${className}`}
      style={{
        padding: padding,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
};
