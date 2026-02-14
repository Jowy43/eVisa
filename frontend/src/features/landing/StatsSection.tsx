import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    { value: "99%", label: "tasa de aprobación a nivel mundial" },
    { value: "12+", label: "años de experiencia" },
    { value: "24/7", label: "asistencia en tu idioma" },
    { value: "200+", label: "nacionalidades atendidas" }
  ];

  return (
    <div style={{ padding: '60px 0', backgroundColor: '#fff' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        {stats.map((stat, index) => (
          <div key={index} style={{ textAlign: 'center', flex: '1 1 200px' }}>
            <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '8px' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '16px', color: 'var(--color-text-light)', fontWeight: 500 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
