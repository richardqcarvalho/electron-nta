import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/user.reducer';

export default createStore(
  combineReducers({
    userReducer,
  }),
  applyMiddleware(thunk),
);
