import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = React.memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1001 }}>
          <div style={{ 
            fontSize: '24px', 
            fontWeight: 800, 
            color: 'var(--color-primary)', 
            letterSpacing: '-0.5px' 
          }}>
            iVisa
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="desktop-menu" style={{ display: 'none' }}> 
           {/* We will use CSS check for this, but for now inline style override in index.css needed or use media query here if possible. 
              Actually, let's use a simple logical check or just CSS classes. 
              I'll assume desktop-menu class handles display: flex on desktop and none on mobile.
              But I cannot rely on external CSS without editing index.css.
              I will use window.innerWidth? No, bad practice.
              I will use a media query styling approach via style tag or just className and ensuring index.css has it.
           */}
           <ul style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: 0, padding: 0, listStyle: 'none' }}>
            <li>
              <Button 
                style={{ 
                  backgroundColor: '#000', 
                  color: '#fff', 
                  border: 'none',
                  padding: '8px 24px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '999px'
                }}
              >
                <span>←</span> Finalizar solicitud
              </Button>
            </li>
            <li>
              <button style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                border: '1px solid var(--color-border)', 
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </button>
            </li>
            <li>
              <Button 
                variant="outline" 
                style={{ 
                  padding: '8px 24px', 
                  fontSize: '14px', 
                  borderColor: 'var(--color-border)', 
                  color: 'var(--color-text-main)',
                  fontWeight: 600 
                }}
              >
                Iniciar sesión
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            padding: '8px',
            zIndex: 1002,
            display: 'flex', // Default flex, will hide on desktop via CSS
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
           <div style={{
             position: 'fixed',
             top: 0,
             left: 0,
             right: 0,
             bottom: 0,
             backgroundColor: 'white',
             zIndex: 999,
             padding: '80px 24px 24px',
             display: 'flex',
             flexDirection: 'column',
             gap: '24px'
           }}>
             <a href="#" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-main)' }}>Verificar estado</a>
             <a href="#" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-main)' }}>Ayuda</a>
             <Button variant="primary" fullWidth onClick={() => setIsMenuOpen(false)}>
               Iniciar sesión
             </Button>
           </div>
        )}
      </div>

      <style>{`
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
          .desktop-menu { display: block !important; }
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
});
