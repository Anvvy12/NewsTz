import React, { useState } from 'react';
import { connect } from 'react-redux';
import './index.scss';

const LoginForm = ({ closeForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const onChangeUserName = event => {
    setUsername(event.target.value);
  };
  const onChangePassword = event => {
    setPassword(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('userData', JSON.stringify({ username, password }));
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Enter Login';
    }

    // Валидация поля пароля
    if (!password.trim()) {
      errors.password = 'Enter password';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    closeForm();
    setUsername('');
    setPassword('');
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="username" onChange={onChangeUserName} value={username} />
          {errors.username && <div>{errors.username}</div>}
          <input
            type="password"
            placeholder="password"
            onChange={onChangePassword}
            value={password}
          />
          {errors.password && <div>{errors.password}</div>}
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
