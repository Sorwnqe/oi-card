import { NavBar } from '@oi/ui';
import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div<{ bgColor?: string }>`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background: ${({ bgColor }) => bgColor};

  .logo {
    margin-right: 1rem;
    height: 0.48rem;
    width: auto;

    img {
      vertical-align: top;
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 14rem;
  height: 0.96rem;

  margin: 0 auto;
  padding: 0 0.2rem;
`;

export const StyledInnerTopBar = styled(NavBar)`
  border: none;
  background: transparent;

  li {
    font-weight: 600;
  }

  li::after {
    display: none;
  }
  .menu-badge {
    width: 0.2rem;
    height: 0.2rem;
    top: 0px;
    right: -3px;
  }
`;

export const StyledItemtext = styled.a`
  font-size: 0.16rem;
  color: #9f9fad !important;

  &:hover {
    color: #3136ff !important;
  }
`;
