import * as React from 'react';

import { Menu, MenuProps } from 'antd';

const NavBar: React.FC<MenuProps> = (props) => {
  return <Menu mode="horizontal" {...props} />;
};

export default NavBar;
