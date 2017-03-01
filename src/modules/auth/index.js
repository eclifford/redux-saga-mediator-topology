import { call } from 'redux-saga/effects';
import { authenticateListener, login } from './workers/listener';

export default function* processActions(action) {
  switch (action.type) {
    case 'PROCESS_AUTHENTICATE_LISTENER':
      yield call(authenticateListener);
      break;
    case 'PROCESS_LOGIN_FLOW_COMPLETE':
      yield call(login);
      break;
  }
}
