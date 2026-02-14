import React, { useState, useCallback } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import type { PaymentDetails } from '../../types/visa';

interface PaymentGatewayProps {
  amount: number;
  onPaymentSuccess: (details: PaymentDetails) => void;
  onBack: () => void;
}

export const PaymentGateway: React.FC<PaymentGatewayProps> = ({ amount, onPaymentSuccess, onBack }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      // 1. Create PaymentIntent on the backend
      const { clientSecret } = await fetch('/api/payment/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency: 'usd' }),
      }).then(r => r.json());

      // 2. Confirm the payment with Stripe
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: window.location.origin,
        },
        redirect: 'if_required',
      });

      if (error) {
        setErrorMessage(error.message ?? 'An unknown error occurred');
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        const details: PaymentDetails = {
           cardNumber: '**** **** **** ' + (paymentIntent.payment_method as any ?? '0000'), 
           expiryDate: '**/**', 
           cvv: '***',
           cardHolderName: 'Stripe User' 
        };
        onPaymentSuccess(details);
      }
    } catch (err: any) {
       setErrorMessage(err.message || 'Payment initiation failed.');
    } finally {
      setIsProcessing(false);
    }
  }, [stripe, elements, amount, onPaymentSuccess]);

  return (
    <Card className="payment-form" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Secure Payment</h3>
      <div style={{ padding: '16px', backgroundColor: '#f0f0f0', borderRadius: '4px', marginBottom: '24px', textAlign: 'center' }}>
        Total to Pay: <strong>${amount.toFixed(2)} USD</strong>
      </div>
      
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        
        {errorMessage && (
          <div style={{ color: 'red', marginTop: '12px', fontSize: '14px' }}>
            {errorMessage}
          </div>
        )}

        <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
          <Button type="button" variant="outline" onClick={onBack} fullWidth>
            Back
          </Button>
          <Button type="submit" fullWidth disabled={!stripe || isProcessing}>
            {isProcessing ? 'Processing...' : `Pay $${amount}`}
          </Button>
        </div>
      </form>
    </Card>
  );
};
