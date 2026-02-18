import React from 'react';

/**
 * Reviews section with 6 reviews from real iVisa.com/es
 * Styled as Trustpilot cards
 *
 * @returns A JSX element with Trustpilot header and 6 review cards
 */
export const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Roy Alan Facey',
      text: 'El proceso para obtener la visa fue muy sencillo, considerando que no soy tan experto en tecnología como algunas personas más jóvenes.',
    },
    {
      id: 2,
      name: 'Jo Bronte',
      text: 'Proceso de solicitud muy sencillo, totalmente digital y con aprobación muy rápida, en menos de 24 horas.',
    },
    {
      id: 3,
      name: 'Arshad Mahmood',
      text: 'El equipo de iVisa brindó ayuda y apoyo total en cada paso del proceso de solicitud de visa, logrando finalmente obtener la visa de visitante.',
    },
    {
      id: 4,
      name: 'Christine Pain Wood',
      text: 'El proceso fue rápido y fácil de entender. Hubo muchas oportunidades para corregir errores. La tecnología hizo que todo fuera mucho más eficiente.',
    },
    {
      id: 5,
      name: 'Laiha Aidiepemily',
      text: 'Más rápido de lo que esperaba, lo recibí en menos de 24 horas. El trámite es simple y fácil. Recomiendo mucho su servicio.',
    },
    {
      id: 6,
      name: 'Michael John Beavis',
      text: 'Su paciencia y comprensión durante mi solicitud de visa fueron excepcionales, lo que me permitió obtener un resultado positivo. Excelente trabajo. Muchas gracias, que tenga un excelente día.',
    }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '40px', color: '#002925', marginBottom: '16px', fontWeight: 800 }}>Reseñas</h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <a
              href="https://www.trustpilot.com/review/ivisa.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 700, color: '#002925', fontSize: '18px', textDecoration: 'none' }}
            >
              Excelente
            </a>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{
                  background: '#00b67a',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px'
                }}>★</div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {reviews.map((review) => (
            <div key={review.id} style={{
              background: '#fff',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #e0e6e4'
            }}>
              <div style={{ color: '#00b67a', fontSize: '18px', marginBottom: '16px' }}>★★★★★</div>
              <p style={{ color: '#002925', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
                {review.text}
              </p>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#002925' }}>
                {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
