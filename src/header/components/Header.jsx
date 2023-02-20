import React from 'react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <Button variant="text" color="inherit" className="nav-button">
          main
        </Button>
        <Button variant="text" color="inherit" className="nav-button">
          news
        </Button>
        <div className="profile">
          <Button variant="text" color="inherit" className="nav-button user ">
            <FontAwesomeIcon icon={faUser} className="user" />
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
