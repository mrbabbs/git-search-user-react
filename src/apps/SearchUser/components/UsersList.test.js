import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { configTests } from '../../../test-utils';
import UsersList from './UsersList';
import users from '../../../fixtures/users.json';
import emptyUsers from '../../../fixtures/empty-users.json';

configTests();

test('renders an message if the list is empty', (t) => {
  const emptyMessage = 'No users found';
  const wrapper = shallow(<UsersList list={[]} emptyMessage={emptyMessage} />);

  t.is(wrapper.find('span').text(), 'No users found');
  t.is(wrapper.find('UserItem').length, 0);
});

test('renders no empty message if the list is not empty', (t) => {
  const emptyMessage = 'No users found';
  const wrapper =
    shallow(<UsersList list={users} emptyMessage={emptyMessage} />);

  t.is(wrapper.find('div span').length, 0);
});

test('renders userCardItems', (t) => {
  const wrapper = shallow(<UsersList list={users} />);

  t.is(wrapper.find('li').length, users.length);
});

test('renders empty UserCardItems', (t) => {
  const wrapper = shallow(<UsersList list={emptyUsers} />);

  t.is(wrapper.find('li').length, emptyUsers.length);
});
