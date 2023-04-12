import * as React from 'react';

import { useTranslation } from '@oi/localization';
import QueueAnim from 'rc-queue-anim';
import TweenOneGroup from 'rc-tween-one/lib/TweenOneGroup';

import { StyledHomeContainer, StyledHomeInner } from './style';

const Content = () => {
  const { t } = useTranslation();

  return (
    <StyledHomeContainer>
      <StyledHomeInner>
        <TweenOneGroup
          key="base-queue-group"
          enter={{ y: '+=30', type: 'from', ease: 'easeInOutQuad' }}
          leave={{ y: '+=30', type: 'to', ease: 'easeInOutQuad' }}
        >
          <QueueAnim key="base-queue-ani" type={['right', 'left']}>
            <h1 className="oi-h1 title">{t('home.container')}</h1>
            <p className="oi-desc desc">{t('home.description')}</p>
          </QueueAnim>
        </TweenOneGroup>
      </StyledHomeInner>
    </StyledHomeContainer>
  );
};

export default Content;
