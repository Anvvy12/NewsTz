import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './index.scss';

const Main = ({ closeForm }) => {
  return (
    <section className="nav-section" onClick={closeForm}>
      <h1 className="title">Коронавiрус</h1>
      <nav className="main-navigator">
        <a href="#" className="main-nav-link">
          Статистика
        </a>
        <a href="#" className="main-nav-link">
          Симптоми
        </a>
        <a href="#" className="main-nav-link">
          Профілактика
        </a>
      </nav>
      <section className="main-section">
        <h2 className="main-header">Залишайтесь в безпеці</h2>
        <p className="main-paragraph">
          Дізнайтесь про профілактику коронавірусу та залишайтесь в безпеці
        </p>
        <ThemeProvider theme={theme}>
          <Button className="main-btn" variant="contained">
            Дізнатися більше
          </Button>
        </ThemeProvider>
      </section>
      <section className="second-section">
        <div className="container">
          <h3>Статистика</h3>
          <p> Тут буде відображатися актуальна ститастика про коронавірус.</p>
        </div>
        <div className="container">
          <h3>Симптомы</h3>
          <p>Тут буде інформація про симптоми коронавірусу.</p>
        </div>

        <div className="container">
          <h3>Профілактика</h3>
          <p>Тут буду інформація про профілактику коронавірусу.</p>
        </div>
      </section>
    </section>
  );
};

export default Main;
