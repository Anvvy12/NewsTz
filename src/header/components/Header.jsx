import React from 'react';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import theme from '../theme';
import { useTranslation } from 'react-i18next';
import './index.scss';

const Header = ({ setVisible }) => {
  const data = JSON.parse(localStorage.getItem('userData'));

  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <nav className="navigation">
        <Link to="/NewsTz/" className="nav-link">
          <div className="nav-container">
            <ThemeProvider theme={theme}>
              <Button variant="text" className="nav-button">
                {t('menu.main')}
              </Button>
            </ThemeProvider>
          </div>
        </Link>
        <Link to="/NewsTz/news" className="nav-link">
          <div className="nav-container">
            <ThemeProvider theme={theme}>
              <Button variant="text" className="nav-button">
                {t('menu.news')}
              </Button>
            </ThemeProvider>
          </div>
        </Link>
        {data ? (
          <Link to="/NewsTz/profile" className="profile-btn">
            <div className=" nav-container">
              <ThemeProvider theme={theme}>
                <Button variant="text" className="nav-button user ">
                  <FontAwesomeIcon icon={faUser} className="user-icon" />
                  <span className="name-text">{data.username}</span>
                </Button>
              </ThemeProvider>
            </div>
          </Link>
        ) : (
          <div className="profile-btn nav-container">
            <ThemeProvider theme={theme}>
              <Button variant="text" className="nav-button user " onClick={() => setVisible()}>
                <FontAwesomeIcon icon={faUser} className="user-icon" />
                <span className="name-text">{t('menu.login')}</span>
              </Button>
            </ThemeProvider>
          </div>
        )}
      </nav>
    </header>
  );
};

const mapState = state => {
  return {};
};
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Header);
