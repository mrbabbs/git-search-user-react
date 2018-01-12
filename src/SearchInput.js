import React from "react";
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  static propTypes = {
    onInput: PropTypes.func,
  };

  render() {
    return <div>
      <input type="text" onKeyUp={this.props.onInput}/>
    </div>
  }
}

export default SearchInput;
