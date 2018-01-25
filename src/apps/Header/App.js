import React from 'react';
import PropTypes from 'prop-types';

import classes from './App.less';

const App = ({ appName }) => (
  <div className={classes.header}>
    <div data-test-app-name className={classes.headerAppName}>{appName}</div>
  </div>
);

App.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default App;
