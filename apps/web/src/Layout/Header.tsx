import * as React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

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
    label: <StyledItemtext href="/">Home</StyledItemtext>,
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
          <StyledItemtext className="subs" href="/">
            Task
          </StyledItemtext>
        ),
      },
    ],
  },
  {
    key: 'Fusion',
    label: <StyledItemtext href="/">Fusion</StyledItemtext>,
  },
  {
    key: '/card',
    label: <StyledItemtext href="/card">Card</StyledItemtext>,
  },
  {
    key: 'Docs',
    label: <StyledItemtext href="/">Docs</StyledItemtext>,
  },
  {
    key: 'Download',
    label: <StyledItemtext href="/">Download</StyledItemtext>,
  },
  {
    key: 'Airdop',
    label: (
      <Badge count={<img src="/assets/airdop.png" className="menu-badge" alt="airdop" />}>
        <StyledItemtext href="/airdop">Airdop</StyledItemtext>
      </Badge>
    ),
  },
];

const Header = () => {
  return (
    <StyledHeaderWrapper>
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
