import React from 'react';
import PropTypes from 'prop-types';

import classes from './App.less';

const SearchInput = ({ onInput, value, placeholder }) => (
  <div className={classes.searchField}>
    <input
      type="text"
      className={classes.inputField}
      value={value}
      placeholder={placeholder}
      onInput={evt => onInput(evt.target.value)}
    />
  </div>
);

SearchInput.propTypes = {
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: '',
};

export default SearchInput;
