import styled from 'styled-components';

export const StyledFooterwrapper = styled.div`
  height: 3.34rem;
  box-sizing: border-box;
  padding: 0 0.3rem;
  background: #f5f5fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledFooterInner = styled.div`
  max-width: 14rem;
  width: 100%;
  margin: 0 auto;
  color: #595961;

  .oi-footerimg {
    position: relative;
    top: 0.38rem;
    width: 0.93rem;
    height: 0.48rem;
    vertical-align: top;
  }

  .oi-footer-lines {
    width: 100%;
    justify-content: space-between;
  }

  .oi-scst {
    .oi-input {
      width: 4.64rem;
      height: 0.48rem;
      background: #fff;
      border-radius: 0.12rem;
      justify-content: space-between;
      overflow: hidden;
      margin-top: 0.15rem;

      input {
        outline: none;
        border: none;
        width: 100%;
        height: 100%;
        text-indent: 2em;
      }
      .oi-but {
        padding: 0 20px;
        height: 0.4rem;
        background: linear-gradient(45deg, #3136ff, #5b60ff);
        box-shadow: 0 0.16rem 0.16rem rgb(49 54 255 / 16%), 0 2px 0 #310ecc;
        border-radius: 0.12rem;
        font-weight: 590;
        font-size: 0.16rem;
        color: #fff;
        text-align: center;
        line-height: 0.4rem;
      }
    }
  }

  .oi-bxnsg {
    .oi-bdgv {
      margin-top: 0.15rem;
    }

    .oi-bdgv i {
      display: block;
      margin-left: 0.15rem;
      width: 0.48rem;
      height: 0.48rem;
      &.Twitter {
        background-size: 100% 100%;
        background-image: url(/assets/Twitter.png);
        &:hover,
        &:active {
          background-image: url(/assets/Twitter.active.png);
        }
      }
      &.Facebook {
        background-size: 100% 100%;
        background-image: url(/assets/Facebook.png);
        &:hover,
        &:active {
          background-image: url(/assets/Facebook.active.png);
        }
      }
      &.Telegram {
        background-size: 100% 100%;
        background-image: url(/assets/Telegram.png);
        &:hover,
        &:active {
          background-image: url(/assets/Telegram.active.png);
        }
      }
      &.Mirror {
        background-size: 100% 100%;
        background-image: url(/assets/Mirror.png);
        &:hover,
        &:active {
          background-image: url(/assets/Mirror.active.png);
        }
      }
      &.Discord {
        background-size: 100% 100%;
        background-image: url(/assets/Discord.png);
        &:hover,
        &:active {
          background-image: url(/assets/Discord.active.png);
        }
      }
    }
  }
`;
