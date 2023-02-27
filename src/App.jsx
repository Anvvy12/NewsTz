import React, { useState } from 'react';
import { Provider } from 'react-redux';
import LoginForm from './login-form/components/LoginForm';
import store from '../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './footer/components/Footer';
import Header from './header/components/Header';
import Profile from './profile/components/Profile';
import Main from './main/components/Main';
import News from './news/components/News';
import './index.scss';

const App = () => {
  const [loginvisinle, setLoginVisible] = useState(false);
  const closeForm = () => {
    setLoginVisible(false);
  };

  const setVisible = () => {
    setLoginVisible(!loginvisinle);
  };
  return (
    <Provider store={store}>
      {loginvisinle ? <LoginForm closeForm={closeForm} /> : null}
      <BrowserRouter>
        <Header setVisible={setVisible} />
        <Switch>
          <Route exact path="/">
            <Main closeForm={closeForm} />
          </Route>
          <Route path="/news">
            <News closeForm={closeForm} />
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
