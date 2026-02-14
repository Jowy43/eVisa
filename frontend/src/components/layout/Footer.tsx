import React from 'react';

export const Footer: React.FC = React.memo(() => {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg-light)', padding: '80px 0 40px', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          {/* Column 1: Brand */}
          <div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '24px' }}>
              iVisa
            </div>
            <p style={{ color: 'var(--color-text-light)', fontSize: '14px', lineHeight: '1.6', maxWidth: '300px' }}>
              Facilitamos los viajes globales. Olvídate del papeleo y las complicaciones burocráticas.
            </p>
          </div>

          {/* Column 2: Descubrir */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '24px' }}>Descubrir</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Blog', 'Calculadora de visas', 'Destinos', 'Embajadas'].map(item => (
                <li key={item}><a href="#" style={{ color: 'var(--color-text-light)', fontSize: '14px' }}>{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Compañía */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '24px' }}>Compañía</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Sobre nosotros', 'Carreras', 'Afiliados', 'Prensa'].map(item => (
                <li key={item}><a href="#" style={{ color: 'var(--color-text-light)', fontSize: '14px' }}>{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Soporte */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '24px' }}>Soporte</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['Centro de ayuda', 'Contáctanos', 'Política de reembolso'].map(item => (
                <li key={item}><a href="#" style={{ color: 'var(--color-text-light)', fontSize: '14px' }}>{item}</a></li>
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
