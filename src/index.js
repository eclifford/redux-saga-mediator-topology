import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import rootSaga from './use-cases/index';
import Foo from './components/foo';

import fooReducer from './modules/playback/reducer';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  combineReducers({
    foo: fooReducer
  }), // rootReducer
  {}, // initialState
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Foo />
  </Provider>,
  window.document.querySelector('#Container')
)
