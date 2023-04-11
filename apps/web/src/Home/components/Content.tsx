import * as React from 'react';

import { useTranslation } from '@oi/localization';

import { StyledHomeContainer, StyledHomeInner } from './Content.style';

const Content = () => {
  const { t } = useTranslation();

  return (
    <StyledHomeContainer>
      <StyledHomeInner>
        <h1 className="oi-h1 title">{t('home.container')}</h1>
        <p className="oi-desc desc">{t('home.description')}</p>
      </StyledHomeInner>
    </StyledHomeContainer>
  );
};

export default Content;
