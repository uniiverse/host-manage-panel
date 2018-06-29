import { all, fork } from 'redux-saga/effects';

import { onAppInit } from './app-init/on-app-init';
import { refreshSessionOnAppInit } from './session/session';

function* rootSaga() {
  const sagas = [
    fork(refreshSessionOnAppInit),
    fork(onAppInit),
  ];

  yield all(sagas);
}

export default rootSaga;
