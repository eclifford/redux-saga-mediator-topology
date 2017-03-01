/*
  Root Saga
  Acts as mediator between USE_CASE actions and PROCESS_ACTIONS
 */
import { spawn, put, call, take, actionChannel } from 'redux-saga/effects';
import playbackHandler from '../modules/playback/index';
import authHandler from '../modules/auth/index';
import playbackSaga from './Playback';
import authSaga from './Auth';

let processChannel;

/**
 * Pass through actions on processChannel to domain handlers
 * processors
 * @return {Generator} [description]
 */
function* processActions() {
  while (true) {
    const action = yield take(processChannel);
    yield [
      playbackHandler(action),
      authHandler(action)
    ]
  }
}

export default function* rootSaga() {
  processChannel = yield actionChannel(action => action.type && action.type.startsWith('PROCESS_'));

  yield [
    spawn(processActions),
    spawn(playbackSaga, processChannel),
    spawn(authSaga, processChannel)
  ]
}
