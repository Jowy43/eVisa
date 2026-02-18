import React from 'react';

/**
 * Footer component matching iVisa.com/es exactly
 *
 * @returns A JSX element with popular links, company info, and legal links
 */
export const Footer: React.FC = React.memo(() => {
  return (
    <footer style={{ backgroundColor: '#002925', padding: '60px 0 32px', color: '#fff' }}>
      <div className="container">

        {/* Top Section - Links */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '32px', marginBottom: '48px', flexWrap: 'wrap' }}>

          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', textDecoration: 'none' }}>Sobre iVisa</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', textDecoration: 'none' }}>Contáctate con nosotros</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', textDecoration: 'none' }}>Sitemap</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', textDecoration: 'none' }}>Configuración de cookies</a>
          </div>

          {/* Social */}
          <div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Conéctate con nosotros:</div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* Social icon placeholders */}
              {['FB', 'IG', 'X', 'LI', 'YT'].map(icon => (
                <div key={icon} style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  cursor: 'pointer'
                }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px' }}>
          {/* Copyright */}
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px', lineHeight: '1.6' }}>
            © 2014-{new Date().getFullYear()} iVisa.com. Todos los derechos reservados. iVisa y el logotipo de iVisa son marcas registradas de iVisa.com.
          </p>

          {/* Legal Links */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textDecoration: 'none' }}>Condiciones del servicio</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textDecoration: 'none' }}>Política de privacidad</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textDecoration: 'none' }}>Aviso de recopilación</a>
            <a href="tel:+34919016278" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', textDecoration: 'none' }}>+34 919 01 62 78</a>
          </div>
        </div>
      </div>
    </footer>
  );
});
