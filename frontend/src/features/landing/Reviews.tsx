import React from 'react';


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
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div className="container">
        
        {/* Trustpilot Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '40px', color: '#002925', marginBottom: '16px' }}>Lo que dicen nuestros viajeros</h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px', fontWeight: 600, color: '#002925' }}>Excelente</span>
              <div style={{ background: '#00b67a', color: 'white', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                  4.8 de 5
              </div>
              <span style={{ color: '#00b67a', fontSize: '24px' }}>★★★★★</span>
              <span style={{ fontSize: '14px', color: '#5f7470' }}>en Trustpilot</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {reviews.map((review) => (
            <div key={review.id} style={{ 
               background: '#f9fdfb', 
               padding: '32px', 
               borderRadius: '16px', 
               border: '1px solid #e0e6e4'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                 <div style={{ color: '#00b67a', fontSize: '20px' }}>★★★★★</div>
                 <div style={{ fontSize: '12px', color: '#ccc' }}>Hace 2 días</div>
              </div>
              
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#002925', marginBottom: '12px' }}>
                 "Proceso muy rápido"
              </h4>
              
              <p style={{ color: '#5f7470', fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
                {review.text}
              </p>
              
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#002925', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {review.name} <span style={{ color: '#00d474' }}>✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
