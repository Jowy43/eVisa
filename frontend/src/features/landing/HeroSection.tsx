import React from 'react';
import { Button } from '../../components/ui/Button';

export const HeroSection: React.FC<{ onApplyClick: () => void }> = ({ onApplyClick }) => {
  return (
    <div style={{ 
      backgroundColor: '#f2fcfb', 
      padding: '80px 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 style={{ fontSize: '48px', marginBottom: '16px', color: '#333' }}>
          Get your <span style={{ color: 'var(--color-primary)' }}>Malaysia Visa</span> Online
        </h1>
        <p style={{ fontSize: '20px', color: '#555', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
          Fast, easy, and reliable. Apply for your Malaysia eVisa in minutes and get approved within 24 hours.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Button onClick={onApplyClick} style={{ padding: '16px 32px', fontSize: '18px' }}>
            Start Application
          </Button>
          <Button variant="outline" style={{ padding: '16px 32px', fontSize: '18px' }}>
            Learn More
          </Button>
        </div>
        
        <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center', gap: '40px', color: '#767676', fontSize: '14px' }}>
          <div className="feature">
            <strong>🚀 Fast Processing</strong>
          </div>
          <div className="feature">
            <strong>🔒 Secure Payment</strong>
          </div>
          <div className="feature">
            <strong>🌍 24/7 Support</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
