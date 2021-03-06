import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { User } from '../../../models';
import classes from './UserCardItem.less';

const {
  userCard__image: userCardImageClass,
  userCard__imageEmpty: userCardImageEmptyClass,
  userCard: userCardClass,
  userCard__info: userCardInfoClass,
  username: usernameClass,
  usernameEmpty: usernameEmptyClass,
  userCardLink: userCardLinkClass,
  userCardHover,
  image: imageClass,
  score: scoreClass,
  scoreEmpty: scoreEmptyClass,
  scoreText: scoreTextClass,
} = classes;

const UserCardItem = ({
  user: {
    username, imgUrl, profileUrl, score,
  },
}) => (
  <a href={profileUrl} target="_blank" className={userCardLinkClass}>
    <div className={classNames(userCardClass, { [userCardHover]: imgUrl })}>
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
        <p
          className={
            classNames(scoreClass, { [scoreEmptyClass]: !username })
          }
        >
          <i className="ion-ribbon-b" />
          <span className={scoreTextClass}>{score}</span>
        </p>
      </div>
    </div>
  </a>
);

UserCardItem.propTypes = {
  user: PropTypes.shape(User).isRequired,
};

export default UserCardItem;
