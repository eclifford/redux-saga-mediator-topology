import { call } from 'redux-saga/effects';
import { processAdOp } from './workers/videoAds';
import { playStation } from './workers/station';
import { logDRM } from './workers/drm';

export default function* processActions(action) {
  switch (action.type) {
    case 'PROCESS_AD_OP':
      yield call(processAdOp);
      break;
    case 'PROCESS_PLAY_STATION':
      yield call(playStation);
      break;
    case 'PROCESS_LOG_DRM':
      yield call(logDRM);
      break;
  }
}
