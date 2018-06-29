/*
 * Helper sub-routine to 'wait' for our login / exchange request
 * to finish, as well as to return the new access token from the store.
*/

import { delay } from 'redux-saga';
import { call, race, select, take } from 'redux-saga/effects';

import consts from '../../actions/consts';
import { getSessionLoading } from '../../selectors/raw-selectors';

const FIVE_SECONDS = 5000;

function* waitForSession() {
  let loading = yield select(getSessionLoading);

  // wait for our token
  while (loading) {
    yield take(consts.SESSION_FETCH_SUCCESS);
    loading = yield select(getSessionLoading);
  }
}

export default function* () {
  // start a race between waiting for the token, and a 5 second timeout
  // if the timeout wins, we return null
  const { token } = yield race({
    token: call(waitForSession),
    timeout: call(delay, FIVE_SECONDS)
  });

  console.log(token);

  if (token) {
    return token;
  }

  // timeout won the race
  return null;
}
