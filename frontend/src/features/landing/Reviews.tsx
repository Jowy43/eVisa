import React from 'react';
import { Card } from '../../components/ui/Card';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Roy Alan Facey',
      text: 'El proceso para obtener la visa fue muy sencillo, considerando que no soy tan experto en tecnología como algunas personas más jóvenes.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jo Bronte',
      text: 'Proceso de solicitud muy sencillo, totalmente digital y con aprobación muy rápida, en menos de 24 horas.',
      rating: 5
    },
    {
      id: 3,
      name: 'Arshad Mahmood',
      text: 'El equipo de iVisa brindó ayuda y apoyo total en cada paso del proceso de solicitud de visa, logrando finalmente obtener la visa de visitante.',
      rating: 5
    }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#F9FDFB' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', color: '#002925' }}>Reseñas</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <span style={{ fontSize: '20px', fontWeight: 600, color: '#002925' }}>Excelente</span>
             <div style={{ background: '#00b67a', padding: '4px 8px', borderRadius: '4px', display: 'flex' }}>
                 <span style={{ color: 'white' }}>★★★★★</span>
             </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {reviews.map((review) => (
            <Card key={review.id} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ color: '#5f7470', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', minHeight: '80px' }}>
                "{review.text}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: '#00b67a', fontSize: '18px' }}>
                  {'★'.repeat(review.rating)}
                </div>
                <div style={{ fontWeight: 600, color: '#002925', fontSize: '14px' }}>
                  {review.name}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
