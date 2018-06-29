import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware  from 'redux-saga';

import rootReducer from '../reducers/root';
import rootSaga from '../sagas/root';

const sagaMiddleware = createSagaMiddleware();
const middleware = process.env.NODE_ENV === 'development' ?
  [logger, sagaMiddleware] : [sagaMiddleware];

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
