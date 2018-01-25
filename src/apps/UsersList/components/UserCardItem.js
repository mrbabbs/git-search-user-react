import React from 'react';
import PropTypes from 'prop-types';

import classes from './UserCardItem.less';

const UserCardItem = ({ user: { username, imgUrl } }) => (
  <div className={classes.userCard}>
    <img className={classes.image} src={imgUrl} alt={username} />
    <span className={classes.username}>{username}</span>
  </div>
);

UserCardItem.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    imgUrl: PropTypes.string,
  }).isRequired,
};

export default UserCardItem;
