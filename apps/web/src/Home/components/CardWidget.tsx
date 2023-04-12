import * as React from 'react';

import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import TweenOneGroup from 'rc-tween-one/lib/TweenOneGroup';

import { StyledCard, StyledCardFull, StyledCardWidgetWrapper } from './style';

export interface CardWidgetDataSource {
  key: string;
  title: string;
  desctipion: string;
  icon?: string;
  img?: string;
  items?: CardWidgetDataSource[];
}

const CardWidget: React.FC<{
  dataSource: CardWidgetDataSource;
  position?: 'left' | 'right';
  bgColor?: string;
}> = ({ dataSource, position = 'right', bgColor }) => {
  return (
    <StyledCardWidgetWrapper>
      <OverPack playScale={0.1}>
        <TweenOneGroup
          key={`${dataSource.title}-group`}
          enter={{ y: '+=30', type: 'from', ease: 'easeInOutQuad' }}
          leave={{ y: '+=30', type: 'to', ease: 'easeInOutQuad' }}
        >
          <QueueAnim
            key={`${dataSource.title}-queue-card`}
            type={['right', 'left']}
            className="widget-wrapper"
          >
            <StyledCardFull position={position} bg={bgColor}>
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
                <StyledCard key={item.key} bgColor={bgColor}>
                  <img src={item.icon} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.desctipion}</p>
                </StyledCard>
              ))}
          </QueueAnim>
        </TweenOneGroup>
      </OverPack>
    </StyledCardWidgetWrapper>
  );
};

export default CardWidget;
