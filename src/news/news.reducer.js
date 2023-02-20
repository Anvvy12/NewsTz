import { GET_NEWS } from './news.action';

const initialState = {
  page: 1,
  news: [],
};

const newsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        page,
      };
    default:
      return state;
  }
};

export default newsReduser;
