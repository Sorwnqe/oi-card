import { Card } from '@oi/ui';
import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  background: linear-gradient(180deg, #eaebff, rgba(234, 235, 255, 0) 61.98%), #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
`;

export const StyledHomeInner = styled.div`
  max-width: 6.19rem;
  text-align: center;
  margin-bottom: 0.4rem;

  .title {
    padding-right: 0.24rem;
    padding-left: 0.24rem;
    font-size: 0.6rem;
    margin: 0.48rem auto;
  }

  .desc {
    margin-bottom: 0px;
    font-size: 0.24rem;
    color: #595961;
  }
`;

export const StyledCardWidgetWrapper = styled.div`
  margin-bottom: 1.4rem;

  .widget-wrapper {
    max-width: 14rem;
    margin: 0 auto;
    margin-bottom: 0.24rem;

    display: grid;
    grid-column-gap: 0.26rem;
    grid-row-gap: 0.26rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StyledCardFull = styled.div<{ position: 'left' | 'right'; bg?: string }>`
  display: flex;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-color: #ebeef5;
  border-radius: 0.24rem;
  overflow: hidden;
  background-color: ${({ bg }) => bg};

  grid-column-start: span 3;
  grid-column-end: span 3;
  grid-row-start: span 1;
  grid-row-end: span 1;

  .content {
    max-width: 5.37rem;
    padding: 1.24rem 0.79rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 0.2rem;

    h1 {
      font-size: 0.42rem;
      margin-bottom: 0.18rem;
      color: #121214;
    }
    p {
      margin-bottom: 0;
      color: #595961;
    }
  }

  .img-wrapper {
    max-width: 5.21rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: ${({ position }) =>
        position === 'left' ? '0.24rem 0 0 0.24rem' : '0 0.24rem 0.24rem 0'};
    }
  }
`;

export const StyledCard = styled(Card)<{ bgColor?: string }>`
  display: flex;
  justify-content: space-between;
  border-radius: 0.22rem;
  overflow: hidden;
  background-color: ${({ bgColor }) => bgColor};
  padding: 0.2rem 0.12rem 0.3rem;

  img {
    width: 0.72rem;
    max-height: 0.72rem;
    min-height: 0.72rem;
    min-width: 0.72rem;
    margin-bottom: 0.22rem;
    border-radius: 0.16rem;
  }
  h3 {
    font-size: 0.24rem;
    margin-bottom: 0.09rem;
    letter-spacing: -0.005rem;
  }
  p {
    font-size: 0.18rem;
  }
`;
