import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NewsList from '../../news-list/components/NewsList';
import { fetchingNews } from '../news.action';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { newsArraySelector, pageSelector } from '../news.selectors';
import { useTranslation } from 'react-i18next';
import './index.scss';

const News = ({ closeForm, fetchingNews, news, page }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (news.length === 0) {
      showMore();
    }
  }, []);

  const showMore = () => {
    fetchingNews(page);
  };
  return (
    <section onClick={closeForm}>
      <div className="news-page">
        <NewsList />
      </div>
      <div className="show-more-container">
        <ThemeProvider theme={theme}>
          <Button variant="contained" className="show-more btn" onClick={showMore}>
            {t('news.show')}
          </Button>
        </ThemeProvider>
      </div>
    </section>
  );
};

const mapDispatch = {
  fetchingNews: fetchingNews,
};

const mapState = state => {
  return {
    news: newsArraySelector(state),
    page: pageSelector(state),
  };
};

export default connect(mapState, mapDispatch)(News);
