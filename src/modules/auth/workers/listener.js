/*
  Worker Notes:
    - Atomic
    - Single Responsibility
    - Leaf of control flow (discourage to emit further events)
 */
import { delay } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function* authenticateListener() {
  console.log('authenticating listener');
  yield call(delay, 1000);
  console.log('listener authenticated');
}

export function* login() {
  console.log('user logged in');
}
