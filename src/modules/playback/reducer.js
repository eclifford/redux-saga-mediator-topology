const fooReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_FOO':
      return state;
    default:
      return state;
  }
}

export default fooReducer;
