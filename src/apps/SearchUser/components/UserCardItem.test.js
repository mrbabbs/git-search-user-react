import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { configTests } from '../../../test-utils';
import UserCardItem from './UserCardItem';

configTests();

const user = {
  username: 'mrbabbs',
  imgUrl: 'cdn.fake.url/mrbabbs.png',
};

test('renders an user object', (t) => {
  const wrapper = shallow(<UserCardItem user={user} />);

  t.is(wrapper.find('p').text(), user.username);
  t.is(wrapper.find('img').prop('src'), user.imgUrl);
});

test('renders an empty user object', (t) => {
  const wrapper = shallow(<UserCardItem user={({ id: 1 })} />);

  t.is(wrapper.length, 1);
});

