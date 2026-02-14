export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: 'Encuentra la visa que necesitas',
      description: 'Usa nuestra herramienta para saber con certeza qué visa te corresponde. Sin complicaciones ni información confusa.'
    },
    {
      id: "02",
      title: 'Presenta tu solicitud y paga en menos de 10 minutos',
      description: 'Introduce tus datos y realiza el pago. Después, podrás adjuntar cualquier documento adicional.'
    },
    {
      id: "03",
      title: 'Nosotros nos encargamos del resto',
      description: 'Combinamos la experiencia de nuestros especialistas con inteligencia artificial para que tu solicitud avance sin errores ni retrasos.'
    }
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '64px', fontSize: '40px', color: '#002925' }}>
          Así de fácil es obtener tu visa
        </h2>
        
        <div 
          className="card hover-lift"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '64px', 
            flexWrap: 'wrap',
            padding: '40px',
          }}
        >
          {/* Image Side */}
          <div style={{ flex: '1 1 400px' }}>
            <img 
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80" 
              alt="Happy travelers" 
              style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', height: '100%' }}
            />
          </div>

          {/* Timeline Side */}
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {steps.map((step, index) => (
                <div key={step.id} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ position: 'relative' }}>
                     <div 
                      style={{ 
                        width: '48px', 
                        height: '48px', 
                        borderRadius: '50%', 
                        backgroundColor: 'var(--color-primary)', 
                        color: '#fff', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: '18px', 
                        fontWeight: 'bold',
                        zIndex: 2,
                        position: 'relative'
                      }}
                    >
                      {step.id}
                    </div>
                    {/* Vertical Line Connector (except last item) */}
                    {index < steps.length - 1 && (
                      <div style={{ 
                        position: 'absolute', 
                        top: '48px', 
                        left: '50%', 
                        transform: 'translateX(-50%)', 
                        width: '4px', 
                        height: '64px', // Adjust based on gap
                        backgroundColor: '#E6F9F5' 
                      }} />
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '24px', marginBottom: '8px', color: '#002925' }}>{step.title}</h3>
                    <p style={{ color: '#5f7470', fontSize: '16px', lineHeight: '1.6' }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
