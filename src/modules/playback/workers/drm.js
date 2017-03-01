/*
  Worker Notes:
    - Atomic
    - Single Responsibility
    - Leaf of control flow (discourage to emit further events)
 */
export function* logDRM() {
  console.log('logging DRM');
}
