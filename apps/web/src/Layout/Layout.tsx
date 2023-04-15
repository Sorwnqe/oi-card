import * as React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <section className="oi-section-card">{children}</section>
    </div>
  );
};

export default Layout;
