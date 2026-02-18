import React from 'react';

export const Footer: React.FC = React.memo(() => {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg-light)', padding: '80px 0 40px', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          {/* Column 1: Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#00d09c' }}>
              iVisa
            </div>
            <p style={{ color: '#5f7470', fontSize: '14px', lineHeight: '1.6' }}>
              Facilitamos los viajes globales. Olvídate del papeleo y las complicaciones burocráticas.
            </p>
          </div>

          {/* Column 2: Compañía */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#002925', marginBottom: '24px' }}>Compañía</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Sobre nosotros', 'Carreras', 'Blog', 'Prensa', 'Afiliados'].map(item => (
                <li key={item}><a href="#" style={{ color: '#5f7470', fontSize: '14px', textDecoration: 'none' }}>{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Soporte */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#002925', marginBottom: '24px' }}>Soporte</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Centro de ayuda', 'Contáctanos', 'Estado de la solicitud'].map(item => (
                <li key={item}><a href="#" style={{ color: '#5f7470', fontSize: '14px', textDecoration: 'none' }}>{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Descubrir */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#002925', marginBottom: '24px' }}>Descubrir</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Calculadora de visas', 'Destinos', 'Embajadas', 'Guías de viaje'].map(item => (
                <li key={item}><a href="#" style={{ color: '#5f7470', fontSize: '14px', textDecoration: 'none' }}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          <div style={{ color: 'var(--color-text-light)', fontSize: '12px' }}>
            © {new Date().getFullYear()} iVisa. Todos los derechos reservados.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
             {['Términos', 'Privacidad', 'Cookies'].map(item => (
                <a key={item} href="#" style={{ color: 'var(--color-text-light)', fontSize: '12px' }}>{item}</a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
});
