import test from 'ava';

import * as reducers from './';

test('has a search object', t => {
  t.deepEqual(reducers.search(), { term: '' });
});

test('has a users list', t => {
  t.deepEqual(reducers.users(), []);
});

