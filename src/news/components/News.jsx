import React from 'react';
import NewsList from '../../news-list/components/NewsList';
import './index.scss';

const News = () => {
  return (
    <main className="main">
      <div className="news-page">
        <NewsList />
      </div>
    </main>
  );
};

export default News;
