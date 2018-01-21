import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {userReducer, friendReducer} from './reducers';

const store = createStore(combineReducers({
  user: userReducer,
  friend: friendReducer
}), applyMiddleware(logger));

export default store;