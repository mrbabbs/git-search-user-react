import React from 'react';
import ReactDOM from 'react-dom';

import SearchInput from './SearchInput';

ReactDOM.render(
  <div>
    <SearchInput onInput={ev => console.log(ev.key)}/>
  </div>,
  document.querySelector('#app')
);

