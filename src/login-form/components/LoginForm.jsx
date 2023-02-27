import React, { useState } from 'react';
import { connect } from 'react-redux';
import './index.scss';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="login-page">
      <div className="form">
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
          <button>login</button>
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
