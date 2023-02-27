import axiosNews from '../flights.gateway';

export const GET_NEWS = 'NEWS/GET_NEWS';

const getNewsActioan = news => {
  return {
    type: GET_NEWS,
    payload: {
      news,
    },
  };
};

export const fetchingNews = (page = 1) => {
  return function (dispatch) {
    axiosNews(page).then(response => dispatch(getNewsActioan(response.data.value)));
  };
};
