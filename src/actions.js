// USE CASE ACTIONS
// - emitted from the UI

export function startStation() {
  return {
    type: 'START_STATION'
  }
}

export function authenticateListener() {
  return {
    type: 'AUTHENTICATE_LISTENER'
  }
}

// PROCESS ACTIONS
// - emitted by the mediator to coordinate work

export function processAdOp() {
  return {
    type: 'PROCESS_AD_OP'
  }
}

export function processPlayStation() {
  return {
    type: 'PROCESS_PLAY_STATION'
  }
}

export function processLogDRM() {
  return {
    type: 'PROCESS_LOG_DRM'
  }
}

export function processAuthenticateListener() {
  return {
    type: 'PROCESS_AUTHENTICATE_LISTENER'
  }
}
