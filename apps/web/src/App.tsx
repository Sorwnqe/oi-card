import React from 'react';

import { LanguageProvider } from '@oi/localization';
import { ConfigProvider } from '@oi/ui';

import Home from './Home';

const App = () => {
  return (
    <ConfigProvider prefixCls="oi-">
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </ConfigProvider>
  );
};

export default App;
