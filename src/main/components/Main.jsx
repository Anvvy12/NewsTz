import React from 'react';
import './index.scss';

const Main = ({ closeForm }) => {
  return <main className="main" onClick={closeForm}></main>;
};

export default Main;
