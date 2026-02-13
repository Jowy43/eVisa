import React from 'react';
import { Card } from '../../components/ui/Card';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      rating: 5,
      text: 'Incredibly fast! I got my visa approval in just 4 hours. Highly recommended.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      text: 'The support team was very helpful when I made a mistake in my application. Great service.'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      rating: 4,
      text: 'Simple process, much better than going to the embassy. Thank you eVisa!'
    }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f7f7f7' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '32px' }}>
          Trusted by Travelers from 150+ Countries
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {reviews.map((review) => (
            <Card key={review.id}>
              <div style={{ color: '#FFB400', marginBottom: '16px' }}>
                {'★'.repeat(review.rating)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '16px', color: '#555' }}>
                "{review.text}"
              </p>
              <div style={{ fontWeight: 'bold', color: '#333' }}>
                - {review.name}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
