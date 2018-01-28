import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './UserCardItem.less';

const {
  userCard__image: userCardImageClass,
  userCard__imageEmpty: userCardImageEmptyClass,
  userCard: userCardClass,
  userCard__info: userCardInfoClass,
  username: usernameClass,
  usernameEmpty: usernameEmptyClass,
  image: imageClass,
} = classes;

const UserCardItem = ({ user: { username, imgUrl } }) => (
  <div className={userCardClass}>
    <div className={classNames(
      userCardImageClass,
      { [userCardImageEmptyClass]: !imgUrl },
    )}
    >
      {
      imgUrl && <img className={imageClass} src={imgUrl} alt={username} />
    }
    </div>
    <div className={userCardInfoClass}>
      <p
        className={
          classNames(usernameClass, { [usernameEmptyClass]: !username })
        }
      >
        {username}
      </p>
    </div>
  </div>
);

UserCardItem.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    imgUrl: PropTypes.string,
  }).isRequired,
};

export default UserCardItem;
