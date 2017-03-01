/*
  Worker Notes:
    - Atomic
    - Single Responsibility
    - Leaf of control flow (discourage to emit further events)
 */
import { delay } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function* processAdOp() {
  console.log('processing ad op');
  yield call(delay, 2000);
  console.log('ad op done');
}
