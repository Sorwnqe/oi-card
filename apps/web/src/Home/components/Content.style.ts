import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  background: linear-gradient(180deg, #eaebff, rgba(234, 235, 255, 0) 61.98%), #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
`;

export const StyledHomeInner = styled.div`
  max-width: 6.19rem;
  text-align: center;

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
