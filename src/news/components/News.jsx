import React from 'react';
import NewsList from '../../news-list/components/NewsList';
import './index.scss';

const News = ({ closeForm }) => {
  return (
    <main className="main" onClick={closeForm}>
      <div className="news-page">
        <NewsList />
      </div>
    </main>
  );
};

export default News;
