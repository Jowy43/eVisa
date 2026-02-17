import React from 'react';
import { Button } from '../../components/ui/Button';

export const HeroSection: React.FC<{ onApplyClick: () => void }> = ({ onApplyClick }) => {
  return (
    <div style={{ 
      position: 'relative',
      minHeight: '850px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f9fdfb 0%, #e6f9f5 100%)',
      paddingTop: '80px',
      paddingBottom: '120px'
    }}>
      
      {/* Bottom Wave SVG */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', lineHeight: 0, transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00d474" fillOpacity="0.05" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px' }}>
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Headline */}
          <h1 style={{ 
            fontSize: '64px', 
            marginBottom: '48px', 
            color: 'var(--color-text-main)',
            fontWeight: 800,
            lineHeight: '1.1',
            letterSpacing: '-1.5px'
          }}>
            La forma <span style={{ 
              background: 'linear-gradient(90deg, #00d09c 0%, #009970 100%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>más eficiente</span><br />
            de conseguir tus visados
          </h1>

          {/* Search Widget - Split Inputs */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '64px'
          }}>
            
            {/* Passport Input */}
            <div style={{ 
              background: '#fff',
              padding: '16px 24px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              display: 'flex', 
              flexDirection: 'column',
              width: '320px',
              border: '1px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }} className="input-group-hover">
               <span style={{ fontSize: '12px', fontWeight: 700, color: '#002925', marginBottom: '4px', textAlign: 'left' }}>Mi pasaporte</span>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <span style={{ fontSize: '20px' }}>🇪🇸</span>
                 <span style={{ fontSize: '16px', fontWeight: 500 }}>España</span>
                 <span style={{ marginLeft: 'auto', color: '#ccc' }}>▼</span>
               </div>
            </div>

            {/* Destination Input */}
            <div style={{ 
              background: '#fff',
              padding: '16px 24px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              display: 'flex', 
              flexDirection: 'column',
              width: '320px',
              border: '1px solid transparent',
              transition: 'all 0.2s ease'
            }}>
               <span style={{ fontSize: '12px', fontWeight: 700, color: '#002925', marginBottom: '4px', textAlign: 'left' }}>Mi destino</span>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <span style={{ fontSize: '20px' }}>✈️</span>
                 <input 
                    type="text" 
                    placeholder="Viajo a..." 
                    style={{ border: 'none', outline: 'none', fontSize: '16px', width: '100%', fontWeight: 500 }}
                  />
               </div>
            </div>

            {/* Action Button */}
            <Button 
               onClick={onApplyClick} 
               style={{ 
                 height: '78px',
                 padding: '0 40px',
                 fontSize: '18px',
                 borderRadius: '16px',
                 backgroundColor: '#00d09c',
                 color: '#002925',
                 fontWeight: 700,
                 boxShadow: '0 10px 30px rgba(0, 208, 156, 0.3)',
                 border: 'none'
               }}
               className="hover-lift"
             >
              Inicia tu solicitud →
            </Button>
          </div>

          {/* Trustpilot Widget */}
          <div style={{ 
            background: '#fff', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px',
            padding: '8px 16px',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            marginBottom: '40px'
          }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{ 
                  background: '#00b67a', 
                  width: '20px', 
                  height: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px'
                }}>★</div>
              ))}
            </div>
            <span style={{ fontWeight: 700, color: '#002925' }}>Trustpilot</span>
          </div>

          {/* Traveler Image */}
          <div style={{ position: 'relative', height: '400px', width: '100%', display: 'flex', justifyContent: 'center' }}>
             <img 
               src="https://images.unsplash.com/photo-1502472584811-0a2f2ca8eb0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1712&q=80" 
               alt="Happy Traveler" 
               style={{ 
                 height: '100%', 
                 objectFit: 'contain', 
                 filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
                 maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
               }} 
             />
          </div>

        </div>
      </div>
    </div>
  );
};
