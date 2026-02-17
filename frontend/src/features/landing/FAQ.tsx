import React, { useState } from 'react';


export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "¿Es seguro solicitar mi visa con iVisa?",
      answer: "Sí, la seguridad de tus datos es nuestra prioridad. Utilizamos encriptación de última generación y cumplimos con todas las normativas de protección de datos. Hemos procesado millones de solicitudes con éxito."
    },
    {
      question: "¿Cuánto tiempo tarda en aprobarse mi visa?",
      answer: "El tiempo de procesamiento depende del destino y el tipo de visa, pero con iVisa, revisamos tu solicitud para evitar errores que causen retrasos. Muchas visas electrónicas se aprueban en 24-48 horas."
    },
    {
      question: "¿Qué pasa si cometo un error en mi solicitud?",
      answer: "Nuestros expertos revisan cada solicitud antes de enviarla al gobierno. Si encontramos algún error, te contactaremos para corregirlo, asegurando la mayor probabilidad de aprobación."
    },
    {
      question: "¿Tengo garantía de reembolso?",
      answer: "En el improbable caso de que tu visa sea rechazada por errores en nuestra gestión, ofrecemos una garantía de reembolso de nuestros honorarios de servicio."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '32px', color: '#002925', textAlign: 'center', marginBottom: '48px' }}>
          Preguntas frecuentes
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              onClick={() => toggle(index)}
              className="hover-lift"
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ 
                padding: '24px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                backgroundColor: openIndex === index ? '#f9fdfb' : '#fff'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#002925', margin: 0 }}>
                  {faq.question}
                </h3>
                <span style={{ fontSize: '24px', color: 'var(--color-primary)', fontWeight: 'bold' }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              
              {openIndex === index && (
                <div style={{ padding: '0 24px 24px', color: '#5f7470', lineHeight: '1.6' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
