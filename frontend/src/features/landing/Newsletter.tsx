import React, { useState } from 'react';

/**
 * Newsletter signup section "¡Más viajes, menos dudas!" from iVisa.com/es
 *
 * @returns A JSX element with email input and subscribe button
 */
export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#fff'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#002925', marginBottom: '16px' }}>
          ¡Más viajes, menos dudas!
        </h2>
        <p style={{ fontSize: '16px', color: '#5f7470', marginBottom: '32px', lineHeight: '1.6' }}>
          Consejos prácticos, novedades y ofertas para que tu próximo viaje sea increíble.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              style={{
                padding: '14px 20px',
                borderRadius: '9999px',
                border: '1px solid #d5e1e2',
                fontSize: '16px',
                width: '300px',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 32px',
                borderRadius: '9999px',
                backgroundColor: '#00d474',
                color: '#002925',
                border: 'none',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Suscribirme
            </button>
          </form>
        ) : (
          <p style={{ fontSize: '16px', color: '#00d474', fontWeight: 600 }}>
            ¡Ya casi llegamos! Revisa tu bandeja de entrada para confirmar tu correo electrónico, conseguir consejos de viaje y mejorar tus aventuras.
          </p>
        )}
      </div>
    </section>
  );
};
