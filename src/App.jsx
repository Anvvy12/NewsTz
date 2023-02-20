import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './footer/components/Footer';
import Header from './header/components/Header';
import Profile from './profile/components/Profile';
import Main from './main/components/Main';
import News from './news/components/News';
import './index.scss';

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
