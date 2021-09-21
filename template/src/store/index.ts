import {applyMiddleware, createStore} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import client from 'src/services/api';

export * from './actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, axiosMiddleware(client), logger),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
