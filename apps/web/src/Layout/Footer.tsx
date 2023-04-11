import * as React from 'react';

import { StyledFooterInner, StyledFooterwrapper } from './Footer.style';
import { footerCommunity } from '../constant/footer';

const Footer = () => {
  return (
    <StyledFooterwrapper>
      <StyledFooterInner>
        <img src="/assets/logo.png" alt="" className="oi-footerimg" />
        <div className="oi-footer-lines row">
          <div className="oi-scst">
            <p className="size14 oi-text">Subscribe for waitlist &amp; growth tips</p>
            <div className="oi-input row">
              <input type="text" placeholder="Enter your email" />
              <div className="oi-but active cur">Subscribe</div>
            </div>
          </div>
          <div className="oi-bxnsg">
            <p className="size14 oi-ddns">Join The Community</p>
            <div className="oi-bdgv row">
              {footerCommunity.map((item) => (
                <a href={item.href} target="_blank" rel="noreferrer" key={item.key}>
                  {item.children}
                </a>
              ))}
            </div>
          </div>
        </div>
      </StyledFooterInner>
    </StyledFooterwrapper>
  );
};

export default Footer;
