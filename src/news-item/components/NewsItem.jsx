import React from 'react';
import './index.scss';

const NewsItem = ({ title, link, description, image }) => {
  return (
    <li className="news">
      <a href={link} target="_blank" className="news__link">
        <span className="news__title">{title}</span>
        <img src={image} className="news__img" alt="News Image" />
        <div className="news__description">{description}</div>
      </a>
    </li>
  );
};

export default NewsItem;
