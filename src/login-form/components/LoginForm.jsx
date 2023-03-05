import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './index.scss';

const LoginForm = ({ closeForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const { t, i18n } = useTranslation();

  const onChangeUserName = event => {
    setUsername(event.target.value);
  };
  const onChangePassword = event => {
    setPassword(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const errors = {};

    if (!username.trim()) {
      errors.username = 'Enter Login';
    } else if (username !== 'admin' || username.length === 0) {
      errors.username = 'wrong user name';
    }

    if (!password.trim()) {
      errors.password = 'Enter password';
    } else if (password !== '12345' || username.length === 0) {
      errors.password = 'wrong password';
    }

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    localStorage.setItem('userData', JSON.stringify({ username, password }));

    closeForm();
    setUsername('');
    setPassword('');
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t('login.userName')}
            onChange={onChangeUserName}
            value={username}
          />
          {errors.username && <div>{errors.username} </div>}
          <input
            type="password"
            placeholder={t('login.password')}
            onChange={onChangePassword}
            value={password}
          />
          {errors.password && <div>{errors.password}</div>}
          <button className="login-btn" type="submit">
            {t('login.login')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
