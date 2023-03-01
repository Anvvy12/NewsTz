import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import NewsItem from '../../news-item/components/NewsItem';

import { newsArraySelector } from '../../news/news.selectors';

import './index.scss';

const NewsList = ({ newsArray }) => {
  return (
    <section className="news-section">
      <ul className="news-list">
        {newsArray.map(newsData => (
          <NewsItem
            key={newsData._id}
            title={newsData.title}
            image={newsData.media_content[0]}
            link={newsData.link}
            description={newsData.summary}
          />
        ))}
      </ul>
    </section>
  );
};

const mapState = state => {
  return {
    newsArray: newsArraySelector(state),
  };
};

export default connect(mapState)(NewsList);
