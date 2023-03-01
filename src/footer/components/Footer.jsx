import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-list__item">
          <a href="https://github.com/Anvvy12" target="_blank">
            <span className="footer-text">My GitHub</span>
          </a>
        </li>
        <li className="footer-list__item">
          <a href="https://www.linkedin.com/in/bogdan-roman-b498b924b/" target="_blank">
            <span className="footer-text">My LinkedIn</span>
          </a>
        </li>
        <li className="footer-list__item">
          <a
            href="https://docs.google.com/document/d/10WwL4OJSFBBRmoIpCZeAW87iNYES-VuJKHpV4Fd45vk/edit"
            target="_blank"
          >
            <span className="footer-text">My CV</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
