import React, { Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import LoginForm from './login-form/components/LoginForm';
import store from '../store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './footer/components/Footer';
import Header from './header/components/Header';
import Profile from './profile/components/Profile';
import Main from './main/components/Main';
import News from './news/components/News';
import { Redirect } from 'react-router-dom';
import './18';
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
      <Suspense>
        {loginvisinle ? <LoginForm closeForm={closeForm} /> : null}
        <BrowserRouter>
          <Header setVisible={setVisible} />
          <main className="main" onClick={closeForm}>
            <Switch>
              <Route exact path="/NewsTz/">
                <Main closeForm={closeForm} />
              </Route>
              <Route path="/NewsTz/news">
                <News closeForm={closeForm} />
              </Route>
              {JSON.parse(localStorage.getItem('userData')) ? (
                <Route path="/NewsTz/profile">
                  <Profile />
                </Route>
              ) : (
                <Redirect to="/NewsTz/" />
              )}
            </Switch>
          </main>
        </BrowserRouter>
        <Footer />
      </Suspense>
    </Provider>
  );
};

export default App;
