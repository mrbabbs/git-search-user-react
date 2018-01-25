import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onInput, value, placeholder }) => (
  <div>
    <input
      type="text"
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
