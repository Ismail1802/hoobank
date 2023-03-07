import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__logo-cont">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <p className="footer__text">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map((link) => {
          return (
            <div className="footer__links" key={link.title}>
              <h3>{link.title}</h3>
              <ul>
                {link.links.map((s) => {
                  return <li key={s.link}>{s.name}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="footer__socials">
        <div className="footer__copy">
          <p>Copyright ©</p>
          <p>2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className="footer__soc">
          {socialMedia.map((soc) => {
            return (
              <div key={soc.id}>
                <img src={soc.icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
