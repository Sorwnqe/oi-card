import * as React from 'react';

import { App, ConfigProvider as AntdConfigProvider } from 'antd';
import type { ConfigProviderProps } from 'antd/es/config-provider';

const ConfigProvider: React.FC<{ children: React.ReactNode } & ConfigProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <AntdConfigProvider
      theme={{
        token: {
          colorPrimary: '#3136ff',
          colorPrimaryTextActive: '#3136ff',
        },
      }}
      {...props}
    >
      <App>{children}</App>
    </AntdConfigProvider>
  );
};

export default ConfigProvider;
