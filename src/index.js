import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import App from '~/App';
import rootReducers, { rootSagas } from '~/ducks';
import { searchUsers } from '~/utils/';

const sagaMiddleware = createSagaMiddleware();
const devToolsExt =
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducers,
  devToolsExt,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(
  rootSagas,
  searchUsers(axios, 'https://api.github.com/search/users?q='),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line
  document.querySelector('#app'),
);
