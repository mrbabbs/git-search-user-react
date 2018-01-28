import React from 'react';
import PropTypes from 'prop-types';

import UserList from './components/UserList';
import classes from './App.less';

const SearchUser = ({
  onInput, value, placeholder, users, emptyMessage,
}) => (
  <div className={classes.searchUsers}>
    <div className={classes.searchUsers__field}>
      <input
        type="text"
        className={classes.inputField}
        value={value}
        placeholder={placeholder}
        onInput={evt => onInput(evt.target.value)}
        // eslint-disable-next-line
        autoFocus="true"
      />
    </div>

    <UserList list={users} emptyMessage={value && emptyMessage} />
  </div>
);

SearchUser.propTypes = {
  onInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  emptyMessage: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    imgUrl: PropTypes.string,
  })),
};

SearchUser.defaultProps = {
  placeholder: '',
  users: [],
  emptyMessage: '',
};

export default SearchUser;
