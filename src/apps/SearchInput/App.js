import React from "react";
import PropTypes from 'prop-types';

const SearchInput = ({ onInput, value }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onInput={evt => onInput(evt.target.value) }
      />
    </div>
  );
}

SearchInput.propTypes = {
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};


export default SearchInput;
