import { put } from 'redux-saga/effects';

import consts from '../../actions/consts';

export function* onAppInit() {
  yield put({ type: consts.APP_START });
}
