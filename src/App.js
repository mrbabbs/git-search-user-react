import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import SearchPage from '~/pages/Search';
import LoginPage from '~/pages/Login';
import './App.less';

const App = () => (
  <HashRouter>
    <div>
      <Route path="/" exact component={SearchPage} />
      <Route path="/login" component={LoginPage} />
    </div>
  </HashRouter>
);

export default App;
