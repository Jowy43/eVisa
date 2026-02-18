import React from 'react';

/**
 * Popular destinations links section from iVisa.com/es
 *
 * @returns A JSX element with popular visa destination links
 */
export const PopularDestinations: React.FC = () => {
  const destinations = [
    { name: 'Marruecos ETA', href: '#' },
    { name: 'Australia ETA', href: '#' },
    { name: 'Malasia Visa de Turista', href: '#' },
    { name: 'Jamaica Formulario C5', href: '#' },
    { name: 'Egipto eVisa', href: '#' },
  ];

  const blogPosts = [
    { name: 'Visa de Vietnam para Argentinos', href: '#' },
    { name: 'Requisitos y costos de la visa para Turquía', href: '#' },
    { name: '¿Puedo visitar Canadá con una visa de EE. UU.?', href: '#' },
    { name: 'Visa EAU - Visa de tránsito para los Emiratos Árabes Unidos', href: '#' },
    { name: '¿Puedo ir a México con una Green Card?', href: '#' },
  ];

  return (
    <section style={{
      padding: '60px 0',
      backgroundColor: '#f8f9f9'
    }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>

          {/* Popular Destinations */}
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#002925', marginBottom: '20px' }}>
              Destinos populares
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {destinations.map(dest => (
                <a
                  key={dest.name}
                  href={dest.href}
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    border: '1px solid #d5e1e2',
                    color: '#002925',
                    fontSize: '14px',
                    textDecoration: 'none',
                    background: '#fff',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {dest.name}
                </a>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#002925', marginBottom: '20px' }}>
              Artículos populares
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {blogPosts.map(post => (
                <a
                  key={post.name}
                  href={post.href}
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    border: '1px solid #d5e1e2',
                    color: '#002925',
                    fontSize: '14px',
                    textDecoration: 'none',
                    background: '#fff',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {post.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
