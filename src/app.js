import React from 'react';
import ReactDOM from 'react-dom';

import helloWorld from './test.js';

ReactDOM.render(
  <h2>{helloWorld('Giovanni')}</h2>,
  document.querySelector('#app')
);

