import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-list__item">Main</li>
        <li className="header-list__item">News</li>
        <li className="header-list__item profile">
          <div>
            <FontAwesomeIcon icon={faUser} className="user" />
            login
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
