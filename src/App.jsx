import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
