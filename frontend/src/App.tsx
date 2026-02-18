import { useState, Suspense, lazy } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { HeroSection } from './features/landing/HeroSection';
import { WhyChooseUs } from './features/landing/WhyChooseUs';
import { StatsSection } from './features/landing/StatsSection';
import { HowItWorks } from './features/landing/HowItWorks';
import { Reviews } from './features/landing/Reviews';
import { WorldRecord } from './features/landing/WorldRecord';
import { DownloadApp } from './features/landing/DownloadApp';
import { Newsletter } from './features/landing/Newsletter';
import { PopularDestinations } from './features/landing/PopularDestinations';
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
            <WhyChooseUs />
            <StatsSection />
            <HowItWorks />
            <Reviews />
            <WorldRecord />
            <DownloadApp />
            <Newsletter />
            <PopularDestinations />
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
