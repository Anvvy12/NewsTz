import React from 'react';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = ({ setVisible }) => {
  const data = JSON.parse(localStorage.getItem('userData'));

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
          {data ? (
            <div className="profile nav-container">
              <Link to={'/profile'}>
                <Button variant="text" color="inherit" className="nav-button user ">
                  <FontAwesomeIcon icon={faUser} className="user-icon" />
                  <span className="name-text">{data.username}</span>
                </Button>
              </Link>
            </div>
          ) : (
            <div className="profile nav-container">
              <Button
                variant="text"
                color="inherit"
                className="nav-button user "
                onClick={() => setVisible()}
              >
                <FontAwesomeIcon icon={faUser} className="user-icon" />
                <span className="name-text">Login</span>
              </Button>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

const mapState = state => {
  return {};
};
const mapDispatch = {};

export default connect(mapState, mapDispatch)(Header);
