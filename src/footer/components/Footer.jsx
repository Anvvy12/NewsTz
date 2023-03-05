import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.scss';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-list__item">
          <a href="https://github.com/Anvvy12" target="_blank">
            <span className="footer-text">{t('footer.git')}</span>
          </a>
        </li>
        <li className="footer-list__item">
          <a href="https://www.linkedin.com/in/bogdan-roman-b498b924b/" target="_blank">
            <span className="footer-text">{t('footer.linkedin')}</span>
          </a>
        </li>
        <li className="footer-list__item">
          <a
            href="https://docs.google.com/document/d/10WwL4OJSFBBRmoIpCZeAW87iNYES-VuJKHpV4Fd45vk/edit"
            target="_blank"
          >
            <span className="footer-text">{t('footer.cv')}</span>
          </a>
        </li>
      </ul>
      <div className="languages-container">
        <button className="languages-btn" onClick={() => changeLanguage('uk')}>
          UK
        </button>
        <button className="languages-btn" onClick={() => changeLanguage('en')}>
          EN
        </button>
      </div>
    </footer>
  );
};

export default Footer;
