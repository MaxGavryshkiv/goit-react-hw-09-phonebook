import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authAction from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authAction.registerSuccess]: (_, { payload }) => payload.user,
  [authAction.loginSuccess]: (_, { payload }) => payload.user,
  [authAction.logoutSuccess]: () => initialUserState,
  [authAction.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authAction.registerSuccess]: (_, { payload }) => payload.token,
  [authAction.loginSuccess]: (_, { payload }) => payload.token,
  [authAction.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;
const error = createReducer(null, {
  [authAction.registerError]: setError,
  [authAction.loginError]: setError,
  [authAction.logoutError]: setError,
  [authAction.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authAction.registerSuccess]: () => true,
  [authAction.loginSuccess]: () => true,
  [authAction.getCurrentUserSuccess]: () => true,
  [authAction.registerError]: () => false,
  [authAction.loginError]: () => false,
  [authAction.getCurrentUserError]: () => false,
  [authAction.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
