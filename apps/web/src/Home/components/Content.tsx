import * as React from 'react';

import { useTranslation } from '@oi/localization';
import { motion, useSpring } from 'framer-motion';

import { StyledHomeContainer, StyledHomeInner } from './style';

const animate = {
  y: 0,
};

const Content = () => {
  const { t } = useTranslation();
  const y = useSpring(30, { duration: 0.5 });

  return (
    <StyledHomeContainer>
      <StyledHomeInner>
        <motion.div style={{ y }} animate={animate} transition={{ type: 'spring' }}>
          <h1 className="title">{t('home.container.line1')}</h1>
          <h1 className="oi-text title">{t('home.container.line2')}</h1>
          <p className="lines desc">{t('home.description.line1')}</p>
          <p className="desc">{t('home.description.line2')}</p>
        </motion.div>
      </StyledHomeInner>
    </StyledHomeContainer>
  );
};

export default Content;
