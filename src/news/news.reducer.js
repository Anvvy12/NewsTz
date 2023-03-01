import { GET_NEWS } from './news.action';

const initialState = {
  newsPosts: [],
};

const newsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        newsPosts: state.newsPosts.concat(action.payload.news),
      };
    default:
      return state;
  }
};

export default newsReduser;
