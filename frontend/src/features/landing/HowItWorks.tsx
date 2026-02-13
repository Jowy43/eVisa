import React from 'react';
import { Card } from '../../components/ui/Card';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Fill Application',
      description: 'Complete the simple online form with your details.'
    },
    {
      id: 2,
      title: 'Pay Online',
      description: 'Review your application and pay securely with credit card.'
    },
    {
      id: 3,
      title: 'Get Visa',
      description: 'Receive your approved eVisa via email within 24 hours.'
    }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '32px' }}>
          How it Works
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {steps.map((step) => (
            <Card key={step.id} className="text-center">
              <div 
                style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--color-primary)', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '20px', 
                  fontWeight: 'bold',
                  margin: '0 auto 16px'
                }}
              >
                {step.id}
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>{step.title}</h3>
              <p style={{ color: '#767676' }}>{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
