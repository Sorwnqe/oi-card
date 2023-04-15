import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import { LanguageProvider } from '@oi/localization';

import Home from './Home';

const App = () => {
  return (
    <LanguageProvider>
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
    </LanguageProvider>
  );
};

export default App;
