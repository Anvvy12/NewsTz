import { GET_NEWS } from './news.action';

const initialState = {
  newsPosts: [],
  page: 1,
};

const newsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        newsPosts: state.newsPosts.concat(action.payload.news),
        page: state.page + 1,
      };
    default:
      return state;
  }
};

export default newsReduser;
