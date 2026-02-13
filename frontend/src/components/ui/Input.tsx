import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, id, ...props }) => {
  return (
    <div className="input-group" style={{ marginBottom: '16px' }}>
      <label 
        htmlFor={id} 
        style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: 500,
          color: 'var(--color-text-main)'
        }}
      >
        {label}
      </label>
      <input
        id={id}
        className={`input ${error ? 'input-error' : ''}`}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '4px',
          border: `1px solid ${error ? '#d93025' : 'var(--color-border)'}`,
          fontSize: '16px'
        }}
        {...props}
      />
      {error && (
        <span style={{ color: '#d93025', fontSize: '12px', marginTop: '4px', display: 'block' }}>
          {error}
        </span>
      )}
    </div>
  );
};
