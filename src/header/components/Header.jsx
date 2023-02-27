import React from 'react';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = ({ setVisible, login }) => {
  return (
    <>
      <header className="header">
        <nav className="navigation">
          <Link to="/">
            <div className="nav-container">
              <Button variant="text" color="inherit" className="nav-button">
                MAIN
              </Button>
            </div>
          </Link>
          <Link to="/news">
            <div className="nav-container">
              <Button variant="text" color="inherit" className="nav-button">
                NEWS
              </Button>
            </div>
          </Link>
          <div className="profile">
            <Button
              variant="text"
              color="inherit"
              className="nav-button user "
              onClick={() => setVisible()}
            >
              <FontAwesomeIcon icon={faUser} className="user" />
              {login ? login : 'Login'}
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

const mapState = state => {
  return {
    login: state.profile.login,
  };
};
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Header);
