import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';
import Profile from './profile/Profile';
import Main from './main/Main';
import News from './news/News';
import './index.scss';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
