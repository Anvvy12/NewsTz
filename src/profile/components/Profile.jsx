import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { validateEmail, validatePhone } from '../validate';
import { useTranslation } from 'react-i18next';
import theme from '../theme';
import './index.scss';

const Profile = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const userDate = JSON.parse(localStorage.getItem('userData')) || {};

  const [formData, setFormData] = useState({
    firstName: userDate?.firstName || '',
    lastName: userDate?.lastName || '',
    email: userDate?.email || '',
    phone: userDate?.phone || '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    const storage = JSON.parse(localStorage.getItem('userData')) || {};
    const newStorage = {
      ...storage,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
    };
    setIsSubmitted(true);
    localStorage.setItem('userData', JSON.stringify(newStorage));
  };

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    const error = name === 'email' ? validateEmail(value) : validatePhone(value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const isFormValid = () => {
    return Object.values(errors).every(error => error === '');
  };

  return (
    <section className="profile">
      <form className="profile-information" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="lastName" className="input-label">
            {t('profile.firstName')}
          </label>
          <input
            type="text"
            className="profile-input "
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastName" className="input-label">
            {t('profile.lastName')}
          </label>
          <input
            type="text"
            className="profile-input"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
        <div className="input-container">
          <label htmlFor="phone" className="input-label">
            {t('profile.phone')}
          </label>
          <input
            type="text"
            className="profile-input "
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            onBlur={handleBlur}
          />
        </div>
        {errors.phone && (
          <div className="sub-container">
            <span className="sub-text">{errors.phone}</span>
          </div>
        )}
        <div className="input-container">
          <label htmlFor="email" className="input-label">
            {t('profile.email')}
          </label>
          <input
            type="text"
            className="profile-input "
            name="email"
            onChange={handleChange}
            value={formData.email}
            onBlur={handleBlur}
          />
        </div>
        {errors.email && (
          <div className="sub-container">
            <span className="sub-text">{errors.email}</span>
          </div>
        )}
        <div className="submit-container">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              className="save-button"
              type="submit"
              disabled={!isFormValid()}
            >
              {t('profile.save')}
            </Button>
          </ThemeProvider>
          {isSubmitted && (
            <div className="sub-container">
              <span className="sub-text">data saved</span>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default Profile;
