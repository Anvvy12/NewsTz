import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import theme from '../theme';
import './index.scss';

const Main = ({ closeForm }) => {
  const { t, i18n } = useTranslation();
  return (
    <section className="nav-section" onClick={closeForm}>
      <h1 className="title">{t('main.title')}</h1>
      <section className="main-section">
        <h2 className="main-header">{t('main.subtitle')}</h2>
        <p className="main-paragraph">{t('main.paragraph')}</p>
        <ThemeProvider theme={theme}>
          <Button className="main-btn" variant="contained">
            {t('main.btn')}
          </Button>
        </ThemeProvider>
      </section>
      <section className="second-section">
        <div className="container">
          <a href="#" className="container-link">
            <h3>{t('main.statistics')}</h3>
            <p>{t('main.statisticsP')}</p>
          </a>
        </div>
        <div className="container">
          <a href="#" className="container-link">
            <h3>{t('main.sumptoms')}</h3>
            <p>{t('main.sumptomsP')}</p>
          </a>
        </div>
        <div className="container">
          <a href="#" className="container-link">
            <h3>{t('main.prevention')}</h3>
            <p>{t('main.preventionP')}</p>
          </a>
        </div>
      </section>
      <section className="second-section">
        <div className="container">
          <a href="#" className="container-link">
            <h3>{t('main.treatment')}</h3>
            <p>{t('main.treatmentP')}</p>
          </a>
        </div>
        <div className="container">
          <a href="#" className="container-link">
            <h3>{t('main.risk')}</h3>
            <p>{t('main.riskP')}</p>
          </a>
        </div>
        <div className="container">
          <a href="#" className="container-link">
            <h3>{t('main.diagnostics')}</h3>
            <p>{t('main.diagnosticsP')}</p>
          </a>
        </div>
      </section>
    </section>
  );
};

export default Main;
