import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import NewsItem from '../../news-item/components/NewsItem';
import { fetchingNews } from '../../news/news.action';
import { newsArraySelector } from '../../news/news.selectors';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';

const NewsList = ({ fetchingNews, newsArray }) => {
  useEffect(() => {
    fetchingNews();
    fetchingNews();
  }, []);

  const showMore = () => {
    fetchingNews();
  };

  return (
    <section className="news-section">
      <ul className="news-list">
        {newsArray.map(newsData => (
          <NewsItem data={newsData} key={Math.random()} />
        ))}
      </ul>
      <div className="show-more-container">
        <ThemeProvider theme={theme}>
          <Button variant="contained" className="show-more btn" onClick={showMore}>
            Show More
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
};

const mapState = state => {
  return {
    newsArray: newsArraySelector(state),
  };
};

const mapDispatch = {
  fetchingNews: fetchingNews,
};

export default connect(mapState, mapDispatch)(NewsList);
