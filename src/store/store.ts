import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'store/modules/rootReducer';
import rootSaga from 'store/sagas/index';

// create store
const makeStore: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [logger, sagaMiddleware];

  const store = configureStore({
    devTools: true,
    middleware: middlewares,
    reducer: rootReducer
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
