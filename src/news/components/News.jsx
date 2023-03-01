import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NewsList from '../../news-list/components/NewsList';
import { fetchingNews } from '../news.action';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './index.scss';

const News = ({ closeForm, fetchingNews }) => {
  const [curentPage, setPage] = useState();

  useEffect(() => {
    fetchingNews(curentPage);
  }, [curentPage]);

  const showMore = () => {
    setPage(curentPage + 1);
    fetchingNews(curentPage);
  };
  return (
    <main className="main" onClick={closeForm}>
      <div className="news-page">
        <NewsList />
      </div>
      <div className="show-more-container">
        <ThemeProvider theme={theme}>
          <Button variant="contained" className="show-more btn" onClick={showMore}>
            Show More
          </Button>
        </ThemeProvider>
      </div>
    </main>
  );
};

const mapDispatch = {
  fetchingNews: fetchingNews,
};

export default connect(null, mapDispatch)(News);
