import React from 'react';
import './index.scss';

const Prifile = () => {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile-information">
          <label htmlFor="first-name">Your first name</label>
          <input type="text" className="profile-input " name="first-name" />
          <label htmlFor="last-name">Your last name</label>
          <input type="text" className="profile-input" name="last-name" />
          <label htmlFor="phone">Your phone number</label>
          <input type="text" className="profile-input " name="phone" />
        </div>
      </section>
    </main>
  );
};

export default Prifile;
