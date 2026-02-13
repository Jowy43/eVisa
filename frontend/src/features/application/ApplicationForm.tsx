import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import type { VisaApplicationData, PaymentDetails } from '../../types/visa';
import { PaymentGateway } from './PaymentGateway';

interface ApplicationFormProps {
  onComplete: () => void;
  onCancel: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ onComplete, onCancel }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<VisaApplicationData>({
    firstName: '', lastName: '', email: '', phone: '', nationality: '',
    passportNumber: '', passportExpiry: '',
    arrivalDate: '', departureDate: '', purpose: 'tourism'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handlePaymentSuccess = async (_paymentDetails: PaymentDetails) => {
    try {
      const response = await fetch('/api/visa/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        onComplete();
      } else {
        alert('Application submission failed.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Error submitting application.');
    }
  };

  return (
    <div className="container" style={{ padding: '40px 0', maxWidth: '800px' }}>
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', color: 'var(--color-primary)' }}>Malaysia Visa Application</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{ 
              width: '32px', height: '32px', borderRadius: '50%', 
              backgroundColor: s <= step ? 'var(--color-primary)' : '#e4e4e4',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
            }}>
              {s}
            </div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <Card>
          <h3 style={{ marginBottom: '24px' }}>Step 1: Personal Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Input label="First Name" name="firstName" value={data.firstName} onChange={handleChange} required />
            <Input label="Last Name" name="lastName" value={data.lastName} onChange={handleChange} required />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Input label="Email" name="email" type="email" value={data.email} onChange={handleChange} required />
            <Input label="Phone" name="phone" type="tel" value={data.phone} onChange={handleChange} required />
          </div>
          <Input label="Nationality" name="nationality" value={data.nationality} onChange={handleChange} required />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
            <Button variant="outline" onClick={onCancel}>Cancel</Button>
            <Button onClick={nextStep}>Next: Passport Details</Button>
          </div>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <h3 style={{ marginBottom: '24px' }}>Step 2: Passport & Travel Details</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Input label="Passport Number" name="passportNumber" value={data.passportNumber} onChange={handleChange} required />
            <Input label="Passport Expiry" name="passportExpiry" type="date" value={data.passportExpiry} onChange={handleChange} required />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Input label="Arrival Date" name="arrivalDate" type="date" value={data.arrivalDate} onChange={handleChange} required />
            <Input label="Departure Date" name="departureDate" type="date" value={data.departureDate} onChange={handleChange} required />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
            <Button variant="outline" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep}>Next: Payment</Button>
          </div>
        </Card>
      )}

      {step === 3 && (
        <PaymentGateway amount={45.00} onPaymentSuccess={handlePaymentSuccess} onBack={prevStep} />
      )}
    </div>
  );
};
