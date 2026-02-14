import { useState, Suspense, lazy } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { HeroSection } from './features/landing/HeroSection';
import { StatsSection } from './features/landing/StatsSection';
import { WhyChooseUs } from './features/landing/WhyChooseUs';
import { HowItWorks } from './features/landing/HowItWorks';
import { Reviews } from './features/landing/Reviews';
import { StripeProvider } from './providers/StripeProvider';

// Lazy load the heavy Application Form
const ApplicationForm = lazy(() => import('./features/application/ApplicationForm').then(module => ({ default: module.ApplicationForm })));

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <StripeProvider>
      <MainLayout>
        {!showForm ? (
          <>
            <HeroSection onApplyClick={() => setShowForm(true)} />
            <StatsSection />
            <WhyChooseUs />
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
            <Suspense fallback={<div className="text-center p-8">Loading application form...</div>}>
              <ApplicationForm 
                onComplete={() => alert('Application Submitted! Redirecting to confirmation...')} 
                onCancel={() => setShowForm(false)} 
              />
            </Suspense>
          </div>
        )}
      </MainLayout>
    </StripeProvider>
  );
}

export default App;
