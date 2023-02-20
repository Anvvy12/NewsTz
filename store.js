import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import newsReduser from './src/news/news.reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({ newsReduser });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;
