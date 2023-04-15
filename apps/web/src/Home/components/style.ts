import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  background: linear-gradient(180deg, #eaebff, rgba(234, 235, 255, 0) 61.98%), #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.96rem 0 1rem 0;
`;

export const StyledHomeInner = styled.div`
  font-size: 100%;
  text-align: center;
  margin-bottom: 0.4rem;

  .title {
    font-size: 72px;
    margin: 0 auto;
  }

  .lines {
    margin-top: 0.32rem;
  }

  .desc {
    margin-bottom: 0px;
    font-size: 24px;
    color: #595961;
  }

  @media screen and (max-width: 991px) {
    .title {
      font-size: 64px;
    }
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 48px;
    }
  }
  @media screen and (max-width: 576px) {
    .title {
      font-size: 32px;
    }
    .desc {
      font-size: 14px;
    }
  }
`;

export const StyledCardWidgetWrapper = styled.div`
  width: 100%;
  padding-bottom: 140px;

  .oi-card-inner {
    padding: 0 0.2rem;
  }

  .widget-wrapper {
    padding: 0 0.2rem;
    max-width: 14rem;
    margin: 0 auto;
    margin-bottom: 0.24rem;

    display: grid;
    grid-column-gap: 0.26rem;
    grid-row-gap: 0.26rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 991px) {
    padding-bottom: 90px;

    .widget-wrapper {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 64px;
  }
  @media screen and (max-width: 576px) {
    padding-bottom: 56px;
  }
`;

export const StyledCardFull = styled.div<{ position: 'left' | 'right' }>`
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f5f5fa;

  grid-column-start: span 3;
  grid-column-end: span 3;
  grid-row-start: span 1;
  grid-row-end: span 1;

  .content {
    max-width: 5.37rem;
    padding: 1.24rem 0.49rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 42px;
      margin-bottom: 0.18rem;
      color: #121214;
    }
    p {
      font-size: 24px;
      margin-bottom: 0;
      color: #595961;
    }
  }

  .img-wrapper {
    max-width: 5.21rem;
  }

  @media screen and (max-width: 991px) {
    &.left {
      flex-direction: column;
    }

    flex-direction: column-reverse;
    grid-column-start: span 1;
    grid-column-end: span 1;
    grid-row-start: span 1;
    grid-row-end: span 1;

    .content {
      max-width: 100%;
      padding: 0.6rem 0.49rem;
    }
    .content h1 {
      font-size: 48px;
    }
    .content p {
      font-size: 24px;
    }

    .img-wrapper {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .content h1 {
      font-size: 32px;
    }
    .content p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 576px) {
    .content h1 {
      font-size: 24px;
    }
    .content p {
      font-size: 14px;
    }
  }
`;

export const StyledCard = styled.div`
  display: block;
  justify-content: space-between;
  border-radius: 16px;
  overflow: hidden;
  background-color: #f5f5fa;
  padding: 0.6rem 0.79rem;

  img {
    width: 72px;
    height: 72px;
    margin-bottom: 0.22rem;
    border-radius: 16px;
  }
  h3 {
    font-size: 32px;
    margin-bottom: 0.09rem;
    letter-spacing: -0.005rem;
  }
  p {
    font-size: 24px;
  }

  @media screen and (max-width: 992px) {
    display: flex;
    gap: 24px;

    img {
      margin-top: 14px;
    }

    h3 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 576px) {
    display: block;

    img {
      margin-top: 14px;
    }

    h3 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`;
