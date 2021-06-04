import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './modules/rootReducer';
import rootSaga from './sagas/index';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';

const makeStore: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [logger, sagaMiddleware];

  const store = configureStore({
    devTools: false,
    middleware: middlewares,
    reducer: rootReducer
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });

