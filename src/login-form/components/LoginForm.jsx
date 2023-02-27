import React, { useState } from 'react';
import { connect } from 'react-redux';
import './index.scss';

const LoginForm = ({ closeForm }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="login-page">
      <div className="form">
        <div onClick={closeForm} className="exit-container">
          <button className="exit-btn">+</button>
        </div>
        <form className="register-form">
          <input type="text" placeholder="name" />
          <input type="password" placeholder="password" />
          <button>create</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button className="login-btn">login</button>
        </form>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    login: state.profile.login,
  };
};
const mapDispatch = {};

export default connect(mapState, mapDispatch)(LoginForm);
