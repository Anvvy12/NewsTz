import React from 'react';
import './index.scss';

const Prifile = () => {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile-information">
          <div className="input-container">
            <label htmlFor="first-name" className="input-label">
              first name
            </label>
            <input type="text" className="profile-input " name="first-name" />
          </div>
          <div className="input-container">
            <label htmlFor="last-name" className="input-label">
              last name
            </label>
            <input type="text" className="profile-input" name="last-name" />
          </div>
          <div className="input-container">
            <label htmlFor="phone" className="input-label">
              phone number
            </label>
            <input type="text" className="profile-input " name="phone" />
          </div>
          <div className="input-container">
            <label htmlFor="email" className="input-label">
              email
            </label>
            <input type="text" className="profile-input " name="email" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Prifile;
