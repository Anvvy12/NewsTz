import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import news from './src/news/news.reducer';
import profile from './src/profile/profile.reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({ news, profile });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;
