import { delay } from 'redux-saga';
import { take, put, call, spawn } from 'redux-saga/effects';
import { processAdOp, processPlayStation, processLogDRM, processAuthenticateListener } from '../actions';

/**
 * Watches for AUTHENTICATE_LISTENER USE_CASE and coordinates work
 * to be done by emitting a series of PROCESS actions for individual
 * domain processors to handle
 */
function* watchForAuthenticateListener(channel) {
  while (true) {
    // TAKE USE_CASE
    yield take('AUTHENTICATE_LISTENER');

    // PUT SEQUENTIAL PROCESS ACTIONS
    yield put(processAuthenticateListener());
    yield put(processPlayStation());
    yield put(processLogDRM());

    // Still have full concurrency control
    yield call(delay, 1000);
  }
}

export default function* authUseCaseSaga(channel) {
  yield [
    spawn(watchForAuthenticateListener)
  ]
}
