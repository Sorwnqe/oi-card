import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import { LanguageProvider } from '@oi/localization';
import { ConfigProvider } from '@oi/ui';

import Home from './Home';

const App = () => {
  return (
    <ConfigProvider prefixCls="oi-">
      <LanguageProvider>
        <ParallaxProvider>
          <Home />
        </ParallaxProvider>
      </LanguageProvider>
    </ConfigProvider>
  );
};

export default App;
