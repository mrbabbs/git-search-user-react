import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './App';
import { rootReducer, rootSaga } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const devToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  devToolsExt,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(
  rootSaga,
  { apiUrl: 'https://api.github.com/search/users?q=' }
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
);
