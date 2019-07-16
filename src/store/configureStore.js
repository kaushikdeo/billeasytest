import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      ReduxLogger,
      ReduxThunk,
    )
  )
}