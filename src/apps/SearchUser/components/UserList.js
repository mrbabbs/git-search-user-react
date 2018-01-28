import React from 'react';
import PropTypes from 'prop-types';

import UserCardItem from './UserCardItem';
import classes from './UserList.less';

const renderUsers = users => users.map(user => (
  <li key={`${user.id}`}>
    <UserCardItem user={user} />
  </li>
));

const UsersList = ({ emptyMessage, list }) => (
  list.length
    ? (<ul>{renderUsers(list)} </ul>)
    : (
      <div className={classes.emptyMessage}>
        <span className={classes.emptyMessageText}>{emptyMessage}</span>
      </div>
    )
);

UsersList.defaultProps = {
  emptyMessage: '',
};

UsersList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    imgUrl: PropTypes.string,
  })).isRequired,
  emptyMessage: PropTypes.string,
};

export default UsersList;
