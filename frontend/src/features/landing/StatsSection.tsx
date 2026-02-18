import React from 'react';

export const StatsSection: React.FC = () => {


  return (
    <div style={{ padding: '80px 0', backgroundColor: '#f9fdfb' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        
        {/* Stat 1 */}
        <div style={{ textAlign: 'center', flex: '1 1 200px' }}>
           <div style={{ color: '#00d09c', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
           </div>
           <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '8px', lineHeight: 1 }}>99%</div>
           <div style={{ fontSize: '16px', color: 'var(--color-text-light)', fontWeight: 500 }}>tasa de aprobación a nivel mundial</div>
        </div>

        {/* Stat 2 */}
        <div style={{ textAlign: 'center', flex: '1 1 200px' }}>
           <div style={{ color: '#00d09c', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
           </div>
           <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '8px', lineHeight: 1 }}>12+</div>
           <div style={{ fontSize: '16px', color: 'var(--color-text-light)', fontWeight: 500 }}>años de experiencia</div>
        </div>

        {/* Stat 3 */}
        <div style={{ textAlign: 'center', flex: '1 1 200px' }}>
           <div style={{ color: '#00d09c', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
           </div>
           <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '8px', lineHeight: 1 }}>24/7</div>
           <div style={{ fontSize: '16px', color: 'var(--color-text-light)', fontWeight: 500 }}>asistencia en tu idioma</div>
        </div>

        {/* Stat 4 */}
        <div style={{ textAlign: 'center', flex: '1 1 200px' }}>
           <div style={{ color: '#00d09c', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
           </div>
           <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--color-text-main)', marginBottom: '8px', lineHeight: 1 }}>200+</div>
           <div style={{ fontSize: '16px', color: 'var(--color-text-light)', fontWeight: 500 }}>nacionalidades atendidas</div>
        </div>

      </div>
    </div>
  );
};
