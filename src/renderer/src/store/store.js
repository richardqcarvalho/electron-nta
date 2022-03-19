import { createStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from '../reducers/user.reducer';

export default createStore(
  combineReducers({
    userReducer,
  }),
);
