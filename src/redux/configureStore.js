import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import quoteReducers from './quote';

const reducer = combineReducers({ quoteReducers });

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
