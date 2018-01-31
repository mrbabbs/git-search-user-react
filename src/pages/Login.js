import React from 'react';

import Header from '~/apps/Header/App';
import classes from './Login.less';

const SearchPage = () => (
  <div>
    <Header appName="GitHub Search Users" />

    <div className={classes.main}>
      Hello Login
    </div>
  </div>
);

export default SearchPage;
