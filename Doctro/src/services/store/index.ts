import {createInjectorsEnhancer, forceReducerReload} from 'redux-injectors';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as storage from 'redux-storage';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import engine from './storage';
import {createReducer} from './reducers';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const {run: runSaga} = sagaMiddleware;

  const reducers = createReducer();
  const persist = storage.createMiddleware(engine);
  // Create the store with saga middleware
  let middlewares = [sagaMiddleware, persist];

  // LOG ONLY IN DEVELOPMENT/STAGING PRODUCTION OPTIMIZATIONS
  if (__DEV__) {
    middlewares = [
      ...middlewares,
      createLogger({
        collapsed: true,
        duration: true,
        timestamp: true,
      }),
    ];
  }
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];
  const store = configureStore({
    reducer: reducers,
    middleware: [...getDefaultMiddleware({}), ...middlewares],
    enhancers,
  });
  const load = storage.createLoader(engine);
  load(store)
    .then((newState: object) => {
      __DEV__ && console.log('Loaded state:', newState);
    })
    .catch(() => {
      __DEV__ && console.log('Failed to load previous state');
    });

  return {store};
}
