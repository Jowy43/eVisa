import React from 'react';

/**
 * "¡Descarga la app de iVisa!" section from iVisa.com/es
 *
 * @returns A JSX element with app download CTA
 */
export const DownloadApp: React.FC = () => {
  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#f9fdfb'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 800, color: '#002925', marginBottom: '16px' }}>
          ¡Descarga la app de iVisa!
        </h2>
        <p style={{ fontSize: '18px', color: '#5f7470', marginBottom: '32px', lineHeight: '1.6' }}>
          Gestiona tus visas, documentos y actualizaciones en un solo lugar.
        </p>
        <a
          href="#"
          style={{
            display: 'inline-block',
            backgroundColor: '#00d474',
            color: '#002925',
            padding: '16px 40px',
            borderRadius: '9999px',
            fontSize: '18px',
            fontWeight: 700,
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
          className="hover-lift"
        >
          Descargar ahora
        </a>
      </div>
    </section>
  );
};
