import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { configTests } from '../../../test-utils';
import UserCardItem from './UserCardItem';
import users from '../../../fixtures/users.json';

configTests();

const user = users[0];

test('renders an user object', (t) => {
  const wrapper = shallow(<UserCardItem user={user} />);

  t.is(wrapper.find('a').text(), user.username);
  t.is(wrapper.find('a').prop('href'), user.profileUrl);
  t.is(wrapper.find('img').prop('src'), user.imgUrl);
});

test('renders an empty user object', (t) => {
  const wrapper = shallow(<UserCardItem user={({ id: 1 })} />);

  t.is(wrapper.length, 1);
});

