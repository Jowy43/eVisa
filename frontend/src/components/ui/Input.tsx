import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = React.memo(({ label, error, id, ...props }) => {
  return (
    <div className="input-group mb-lg">
      <label 
        htmlFor={id} 
        className="input-label"
      >
        {label}
      </label>
      <input
        id={id}
        className={`input input-pro ${error ? 'input-error' : ''}`}
        {...props}
      />
      {error && (
        <span style={{ color: '#d93025', fontSize: '14px', marginTop: '6px', display: 'block' }}>
          {error}
        </span>
      )}
    </div>
  );
});
