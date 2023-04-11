import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>{children}</section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
