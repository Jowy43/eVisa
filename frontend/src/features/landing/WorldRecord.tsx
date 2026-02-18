import React from 'react';

/**
 * "Hicimos posible un récord mundial" section from iVisa.com/es
 *
 * @returns A JSX element highlighting the world record achievement
 */
export const WorldRecord: React.FC = () => {
  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#002925',
      color: '#fff'
    }}>
      <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '24px', color: '#fff' }}>
          Hicimos posible un récord mundial
        </h2>
        <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>
          iVisa fue parte de un viaje histórico: ayudamos a una persona a visitar todos los países del mundo en solo 499 días,
          gestionando uno de los itinerarios más complejos jamás realizados. Si pudimos hacerlo realidad para él, imagina lo que podemos hacer por ti.
        </p>
        <p style={{ fontSize: '16px', color: '#00d474', fontWeight: 700 }}>
          ¡Estamos en la lista de INC 5000 de las empresas de más rápido crecimiento!
        </p>
      </div>
    </section>
  );
};
