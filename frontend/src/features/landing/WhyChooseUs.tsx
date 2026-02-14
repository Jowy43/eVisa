import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const comparison = [
    {
      label: "Solicitud 100% gubernamental",
      negative: "Formularios confusos y largos",
      positive: "Formulario simplificado y fácil"
    },
    {
      label: "Soporte",
      negative: "Sin ayuda en el proceso",
      positive: "Equipo de expertos 24/7"
    },
    {
      label: "Velocidad",
      negative: "Semanas de espera",
      positive: "Aprobación en días (o horas)"
    },
    {
      label: "Revisión",
      negative: "Riesgo de rechazo por errores",
      positive: "Revisión experta antes del envío"
    }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '64px', fontSize: '40px', color: '#002925' }}>
          ¿Por qué elegirnos?
        </h2>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '32px' }}>
          {/* Negative Column */}
          <div style={{ flex: 1, padding: '32px', background: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)', color: 'var(--color-text-light)' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '32px', textAlign: 'center', color: 'var(--color-text-light)' }}>El proceso estándar</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {comparison.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                   <span style={{ color: '#ff5a5f', fontSize: '24px' }}>✕</span>
                   <span style={{ fontSize: '16px' }}>{item.negative}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Positive Column */}
          <div 
            className="hover-scale"
            style={{ 
            flex: 1, 
            padding: '32px', 
            background: 'var(--color-white)', 
            borderRadius: 'var(--radius-md)', 
            border: '2px solid var(--color-primary)',
            boxShadow: '0 8px 32px rgba(0, 212, 116, 0.15)', // Green glow
            position: 'relative',
            top: '-16px'
          }}>
             <div style={{ 
               position: 'absolute', 
               top: '-16px', 
               left: '50%', 
               transform: 'translateX(-50%)', 
               background: 'var(--color-primary)', 
               color: '#000', // Black text on Green per design
               padding: '4px 12px', 
               borderRadius: '12px',
               fontSize: '12px',
               fontWeight: 'bold',
               letterSpacing: '1px'
             }}>
               RECOMENDADO
             </div>
            <h3 style={{ fontSize: '24px', marginBottom: '32px', textAlign: 'center', color: 'var(--color-text-main)', fontWeight: 800 }}>Con iVisa</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {comparison.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                   <div style={{ 
                     background: '#E6F9F5', // Light green bg
                     borderRadius: '50%', 
                     width: '32px', 
                     height: '32px', 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center',
                     flexShrink: 0
                   }}>
                     <span style={{ color: 'var(--color-primary)', fontSize: '16px', fontWeight: 'bold' }}>✓</span>
                   </div>
                   <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-text-main)' }}>{item.positive}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
