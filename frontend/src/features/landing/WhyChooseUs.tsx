import React from 'react';

/**
 * Comparison section: "Por qué millones de viajeros confían en iVisa"
 * Exact content from ivisa.com/es
 *
 * @returns A JSX element with two columns comparing "Sin iVisa" vs "Con iVisa"
 */
export const WhyChooseUs: React.FC = () => {
  const withoutIvisa = [
    "Solicitudes gubernamentales largas",
    "Preguntas confusas. Incluso un solo error puede causar demoras o el rechazo.",
    "Sin asistencia si tienes problemas",
    "El progreso se perderá si abandona la página",
    "Formas de pago limitadas"
  ];

  const withIvisa = [
    "Solicitudes rápidas",
    "Preguntas claras. Nuestros expertos se aseguran de que no se cometa ningún error",
    "Soporte disponible las 24 horas, los 7 días de la semana por WhatsApp, correo electrónico o chat",
    "Progreso guardado para que puedas regresar más tarde",
    "Múltiples formas seguras de pago"
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '64px', fontSize: '40px', color: '#002925', fontWeight: 800 }}>
          Por qué millones de viajeros confían en iVisa
        </h2>

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {/* Sin iVisa Column */}
          <div style={{
            flex: '1 1 400px',
            padding: '40px 32px',
            background: '#f8f9f9',
            borderRadius: '16px',
            color: '#5f7470'
          }}>
            <h3 style={{ fontSize: '22px', marginBottom: '32px', textAlign: 'center', color: '#5f7470', fontWeight: 700 }}>Sin iVisa</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {withoutIvisa.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#fce4e4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <span style={{ color: '#e53e3e', fontSize: '14px', fontWeight: 'bold' }}>✕</span>
                  </div>
                  <span style={{ fontSize: '16px', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Con iVisa Column */}
          <div style={{
            flex: '1 1 400px',
            padding: '40px 32px',
            background: '#fff',
            borderRadius: '16px',
            border: '2px solid #00d474',
            boxShadow: '0 8px 32px rgba(0, 212, 116, 0.12)',
            position: 'relative'
          }}>
            <h3 style={{ fontSize: '22px', marginBottom: '32px', textAlign: 'center', color: '#002925', fontWeight: 800 }}>
              Con <span style={{ color: '#00d474' }}>iVisa</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {withIvisa.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#e6f9f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <span style={{ color: '#00d474', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                  </div>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: '#002925', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
