import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = React.memo(() => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000, 
      backgroundColor: 'var(--color-white)', 
      borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
      boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
      transition: 'all 0.3s ease',
      padding: '16px 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* iVisa-style Logo */}
          <div style={{ 
            fontSize: '24px', 
            fontWeight: 800, 
            color: 'var(--color-primary)', 
            letterSpacing: '-0.5px' 
          }}>
            iVisa
          </div>
        </div>

        <nav>
          <ul style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <li className="hidden-mobile">
              <a href="#" style={{ fontWeight: 500, color: 'var(--color-text-main)', fontSize: '15px' }}>
                Verificar estado
              </a>
            </li>
            <li className="hidden-mobile">
              <a href="#" style={{ fontWeight: 500, color: 'var(--color-text-main)', fontSize: '15px' }}>
                Ayuda
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Button variant="outline" style={{ padding: '8px 20px', fontSize: '14px', borderColor: 'var(--color-border)', color: 'var(--color-text-main)' }}>
                Iniciar sesión
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});
