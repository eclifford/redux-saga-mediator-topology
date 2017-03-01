/*
  Worker Notes:
    - Atomic
    - Single Responsibility
    - Leaf of control flow (discourage to emit further events)
 */
import { delay } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function* playStation() {
  console.log('playing station');
  yield call(delay, 1000);
}
