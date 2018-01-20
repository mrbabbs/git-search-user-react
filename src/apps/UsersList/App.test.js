import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { configTests } from '../../test-utils';
import UsersList from './App';

configTests();

const users = [{
  username: 'mrbabbs',
  imgUrl: 'cdn.fake.url/mrbabbs.png',
}, {
  username: 'bodge',
  imgUrl: 'cdn.fake.url/bodge.png',
}, {
  username: 'hercules',
  imgUrl: 'cdn.fake.url/hercules.png',
}];

test('renders an message if the list is empty', (t) => {
  const emptyMessage = 'No users found';
  const wrapper = shallow(<UsersList list={[]} emptyMessage={emptyMessage} />);

  t.is(wrapper.find('span').text(), 'No users found');
  t.is(wrapper.find('UserItem').length, 0);
});

test('renders userCardItems', (t) => {
  const wrapper = shallow(<UsersList list={users} />);

  t.is(wrapper.find('div').children('span').length, 0);
  t.is(wrapper.find('li').length, users.length);
});
