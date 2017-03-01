import { delay } from 'redux-saga';
import { take, put, call, spawn, flush } from 'redux-saga/effects';
import { processAdOp, processPlayStation, processLogDRM, processAuthenticateListener } from '../actions';

/**
 * Watches for START_STATION USE_CASE and coordinates work
 * to be done by emitting a series of PROCESS actions for individual
 * domain processors to handle
 */
function* watchForStartStation(channel) {
  while (true) {
    // TAKE USE_CASE
    yield take('START_STATION');
    yield flush(channel); // if destructive USE_CASE we can optionally flush the channel

    // PUT SEQUENTIAL PROCESS ACTIONS
    yield put(processAdOp());
    yield put(processPlayStation());
    yield put(processLogDRM());

    // Still have full concurrency control
    yield call(delay, 1000);
  }
}

export default function* playbackUseCaseSaga(channel) {
  yield [
    spawn(watchForStartStation, channel)
  ]
}
