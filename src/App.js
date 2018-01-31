import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchPage from '~/pages/Search';
import './App.less';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={SearchPage} />
  </BrowserRouter>
);

export default App;
