import React from 'react';
import { Button } from '../../components/ui/Button';

export const HeroSection: React.FC<{ onApplyClick: () => void }> = ({ onApplyClick }) => {
  return (
    <div style={{ 
      position: 'relative',
      minHeight: '650px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(230, 249, 245, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%)',
        zIndex: -1
      }} />

      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          {/* Headline */}
          <h1 style={{ 
            fontSize: '64px', 
            marginBottom: '24px', 
            color: 'var(--color-text-main)',
            fontWeight: 800,
            lineHeight: '1.1',
            letterSpacing: '-1.5px'
          }}>
            La forma <span style={{ color: 'var(--color-primary)' }}>más rápida</span><br />
            de conseguir tus visados
          </h1>
          
          <p style={{ fontSize: '20px', color: 'var(--color-text-main)', marginBottom: '48px', fontWeight: 500 }}>
            Obtén tu documento de viaje en 3 sencillos pasos.
          </p>

          {/* Search/Filter Box - "Floating Island" */}
          <div style={{ 
            background: '#fff',
            padding: '12px',
            borderRadius: '100px', // Pill shape like iVisa new design
            boxShadow: '0 8px 40px rgba(0, 41, 37, 0.12)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid #e0e6e4'
          }}>
            
            {/* Passport Input */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              padding: '12px 24px',
              borderRight: '1px solid #e0e6e4'
            }}>
              <span style={{ fontSize: '24px' }}>🌏</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#002925', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Soy ciudadano de</div>
                <div style={{ fontSize: '16px', color: '#5f7470' }}>España</div>
              </div>
            </div>

            {/* Destination Input */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              padding: '12px 24px'
            }}>
              <span style={{ fontSize: '24px' }}>✈️</span>
              <div style={{ textAlign: 'left', width: '100%' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-text-main)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Viajo a</div>
                <input 
                  type="text" 
                  placeholder="Escribe un destino..." 
                  style={{ 
                    border: 'none', 
                    outline: 'none', 
                    width: '100%', 
                    fontSize: '16px', 
                    color: 'var(--color-text-main)',
                    fontWeight: 500
                  }}
                />
              </div>
            </div>

            {/* Action Button - Round */}
            <Button 
               onClick={onApplyClick} 
               style={{ 
                 height: '64px',
                 fontSize: '18px',
                 boxShadow: '0 4px 12px rgba(0, 212, 116, 0.4)'
               }}
             >
              Empezar
            </Button>
          </div>

          {/* Trust Badge */}
          <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#00b67a', fontSize: '28px' }}>★</span> 
              <span style={{ fontSize: '20px', fontWeight: 700, color: '#002925' }}>Trustpilot</span>
            </div>
            <div style={{ height: '24px', width: '1px', background: '#ccc' }}></div>
            <span style={{ color: '#002925', fontWeight: 600 }}>Excelentes reseñas de +40,000 viajeros</span>
          </div>
        </div>
      </div>
    </div>
  );
};
