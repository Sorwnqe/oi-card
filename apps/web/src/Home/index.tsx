import * as React from 'react';

import Layout from '@/Layout/Layout';

import CardWidget from './components/CardWidget';
import Content from './components/Content';
import { infos1 } from './config/info1';
import { infos2 } from './config/info2';
import { infos3 } from './config/info3';

const Home = () => {
  return (
    <Layout>
      <Content />
      <CardWidget dataSource={infos1()} position="right" />
      <CardWidget dataSource={infos2()} position="left" />
      <CardWidget dataSource={infos3()} position="right" />
    </Layout>
  );
};

export default Home;
