import React from 'react';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header style={{ borderBottom: '1px solid #e4e4e4', padding: '16px 0' }}>
        <div className="container flex justify-between items-center">
          <div className="logo" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-primary)' }}>
            eVisa
          </div>
          <nav>
            <ul className="flex gap-md">
              <li><a href="#" style={{ fontWeight: 500 }}>Track Application</a></li>
              <li><a href="#" style={{ fontWeight: 500 }}>Contact Us</a></li>
              <li><a href="#" style={{ fontWeight: 500 }}>Log In</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main style={{ flex: 1 }}>
        {children}
      </main>

      <footer style={{ backgroundColor: '#f9f9f9', padding: '48px 0', marginTop: 'auto', borderTop: '1px solid #e4e4e4' }}>
        <div className="container">
          <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            <div>
              <h4 style={{ marginBottom: '16px' }}>eVisa</h4>
              <p style={{ color: '#767676', fontSize: '14px' }}>
                Simplifying travel documentation for everyone.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px' }}>Company</h4>
              <ul style={{ color: '#767676', fontSize: '14px', lineHeight: '2' }}>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px' }}>Support</h4>
              <ul style={{ color: '#767676', fontSize: '14px', lineHeight: '2' }}>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #e4e4e4', textAlign: 'center', color: '#767676', fontSize: '12px' }}>
            © {new Date().getFullYear()} eVisa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
