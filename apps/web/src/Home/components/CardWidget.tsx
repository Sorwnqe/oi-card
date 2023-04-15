import * as React from 'react';

import { motion, useInView, Variants } from 'framer-motion';

import { StyledCard, StyledCardFull, StyledCardWidgetWrapper } from './style';

export interface CardWidgetDataSource {
  key: string;
  title: string;
  desctipion: string;
  icon?: string;
  img?: string;
  items?: CardWidgetDataSource[];
}
const variants: Variants = {
  offetScreen: { y: 60, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const CardWidget: React.FC<{
  dataSource: CardWidgetDataSource;
  position?: 'left' | 'right';
}> = ({ dataSource, position = 'right' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <StyledCardWidgetWrapper
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.5s',
      }}
    >
      <motion.div className="widget-wrapper" variants={variants}>
        <StyledCardFull position={position} className={position}>
          {position === 'left' && (
            <div className="img-wrapper">
              <img src={dataSource.img} alt={dataSource.title} />
            </div>
          )}

          <div className="content">
            <h1 className="oi-h1">{dataSource.title}</h1>
            <p>{dataSource.desctipion}</p>
          </div>

          {position === 'right' && (
            <div className="img-wrapper">
              <img src={dataSource.img} alt={dataSource.title} />
            </div>
          )}
        </StyledCardFull>

        {dataSource.items &&
          dataSource?.items.map((item) => (
            <StyledCard key={item.key}>
              <img src={item.icon} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.desctipion}</p>
              </div>
            </StyledCard>
          ))}
      </motion.div>
    </StyledCardWidgetWrapper>
  );
};

export default CardWidget;
