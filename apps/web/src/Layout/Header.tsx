import * as React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

import { useWindowEventLisenter } from '@oi/hooks';
import { Badge, Space } from '@oi/ui';

import {
  StyledHeaderInner,
  StyledHeaderWrapper,
  StyledInnerTopBar,
  StyledItemtext,
} from './Header.style';

const menus = [
  {
    key: 'Home',
    label: <StyledItemtext href="https://oi.xyz/#/">Home</StyledItemtext>,
  },
  {
    key: '/dashboard',
    label: (
      <StyledItemtext>
        <Space align="end" size={8}>
          Dashboard
          <AiOutlineDown size={12} />
        </Space>
      </StyledItemtext>
    ),
    children: [
      {
        key: 'Task',
        label: (
          <StyledItemtext className="subs" href="https://oi.xyz/#/task">
            Task
          </StyledItemtext>
        ),
      },
      {
        key: 'influence',
        label: (
          <StyledItemtext className="subs" href="https://oi.xyz/#/influence">
            Influence
          </StyledItemtext>
        ),
      },
      {
        key: 'power',
        label: (
          <StyledItemtext className="subs" href="https://oi.xyz/#/power">
            Power
          </StyledItemtext>
        ),
      },
      {
        key: 'Token',
        label: (
          <StyledItemtext className="subs" href="https://oi.xyz/#/token">
            Token
          </StyledItemtext>
        ),
      },
    ],
  },
  {
    key: 'Fusion',
    label: <StyledItemtext href="https://oi.xyz/#/fusion">Fusion</StyledItemtext>,
  },
  {
    key: '/card',
    label: <StyledItemtext href="https://oi.xyz/#/card">Card</StyledItemtext>,
  },
  {
    key: '/docs',
    label: (
      <StyledItemtext href="https://elite-packet-d7d.notion.site/Oi-Network-Wiki-e8ad1687a8d04281a397c432eae80754">
        Docs
      </StyledItemtext>
    ),
  },
  {
    key: 'Download',
    label: <StyledItemtext href="https://oi.xyz/#/download">Download</StyledItemtext>,
  },
  {
    key: 'Airdop',
    label: (
      <Badge count={<img src="/assets/airdop.png" className="menu-badge" alt="airdop" />}>
        <StyledItemtext href="https://oi.xyz/#/airdrop">Airdop</StyledItemtext>
      </Badge>
    ),
  },
];

const Header = () => {
  const [bg, setBg] = React.useState('transparent');

  useWindowEventLisenter('scroll', () => {
    if (window.pageYOffset >= 80) {
      setBg('#fff');
      return;
    }
    setBg('transparent');
  });

  return (
    <StyledHeaderWrapper bgColor={bg}>
      <StyledHeaderInner>
        <a href="https://oi.xyz" className="logo">
          <img src="/assets/logo.png" alt="oi!network" />
        </a>
        <StyledInnerTopBar items={menus} defaultSelectedKeys={['/card']} />
      </StyledHeaderInner>
    </StyledHeaderWrapper>
  );
};

export default Header;
