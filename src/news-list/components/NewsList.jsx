import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import NewsItem from '../../news-item/components/NewsItem';
import { fetchingNews } from '../../news/news.action';

const NewsList = ({ fetchingNews, currentPage, newsArray }) => {
  const [a, b] = useState(currentPage);

  setInterval(() => {
    b(a + 1);
  }, 6000);

  useEffect(() => {
    fetchingNews();
  }, [a]);

  return (
    <ul className="news-list">
      <NewsItem />
    </ul>
  );
};

const mapState = state => {
  return {
    currentPage: state.news.page,
    newsArray: state.news.newsPosts,
  };
};

const mapDispatch = {
  fetchingNews: fetchingNews,
};

export default connect(mapState, mapDispatch)(NewsList);
