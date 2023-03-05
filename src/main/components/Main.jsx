import React from 'react';
import './index.scss';

const Main = ({ closeForm }) => {
  return <section className="section" onClick={closeForm}></section>;
};

export default Main;
