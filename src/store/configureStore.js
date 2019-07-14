import { createStore, appleMiddleware, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import ReduxLogger from 'redux-logger';
import initialState from './initialState';

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      ReduxLogger
    )
  )
};