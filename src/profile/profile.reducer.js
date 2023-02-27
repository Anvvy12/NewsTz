const initialState = {
  login: '',
  password: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ksks':
      return {
        ...state,
        newsPosts: state.newsPosts.concat(action.payload.news),
      };
    default:
      return state;
  }
};

export default profileReducer;
