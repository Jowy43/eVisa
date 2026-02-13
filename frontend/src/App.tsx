import { useState } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { HeroSection } from './features/landing/HeroSection';
import { HowItWorks } from './features/landing/HowItWorks';
import { Reviews } from './features/landing/Reviews';
import { ApplicationForm } from './features/application/ApplicationForm';
import { StripeProvider } from './providers/StripeProvider';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <StripeProvider>
      <MainLayout>
        {!showForm ? (
          <>
            <HeroSection onApplyClick={() => setShowForm(true)} />
            <HowItWorks />
            <Reviews />
          </>
        ) : (
          <div className="container" style={{ padding: '40px 0', maxWidth: '800px' }}>
             <button 
              onClick={() => setShowForm(false)} 
              style={{ marginBottom: '24px', background: 'none', border: 'none', color: 'var(--color-primary)', textDecoration: 'underline', cursor: 'pointer' }}
            >
              &larr; Back to Home
            </button>
            <ApplicationForm 
              onComplete={() => alert('Application Submitted! Redirecting to confirmation...')} 
              onCancel={() => setShowForm(false)} 
            />
          </div>
        )}
      </MainLayout>
    </StripeProvider>
  );
}

export default App;
