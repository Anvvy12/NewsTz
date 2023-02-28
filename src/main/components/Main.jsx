import React from 'react';
import axiosNews from '../../flights.gateway';
import './index.scss';

const Main = ({ closeForm }) => {
  return (
    <main className="main" onClick={closeForm}>
      main
    </main>
  );
};

export default Main;
