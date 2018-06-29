import { call, put, takeLatest } from 'redux-saga/effects';

import request from '../../lib/request';

import consts from '../../actions/consts';

export function requestUser() {
  const options = { credentials: 'include' };

  return request('http://uvrs.tech:8080/api/v2/current_user/exchange', options)
    .then(res => res.json());
}

function* refreshSession() {
  try {
    yield put({ type: consts.SESSION_INIT });

    const data = yield call(requestUser);

    // Server returned { 'error': 'unauthorized' }
    if (data.error || !data.current_user) {
      throw new Error('unauthorized request to fetch user session');
    }

    yield put({ type: consts.SESSION_FETCH_SUCCESS, payload: {
      user: data.current_user,
      csrfToken: sessionStorage.getItem('csrf_token')
    }});
  }
  catch (e) {
    yield put({ type: consts.SESSION_FETCH_ERROR, payload: e });
  }
}

export function* refreshSessionOnAppInit() {
  yield takeLatest(consts.APP_START, refreshSession);
}
