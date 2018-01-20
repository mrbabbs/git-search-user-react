import test from 'ava';

import { searchUsers } from './';

test('searchUsers returns a function', (t) => {
  t.is(typeof searchUsers(Function.prototype, 'api.io'), 'function');
});

test('searchUsers call the endpoint', (t) => {
  const baseUrl = 'api.io?q=';
  const client = {
    get(url) {
      t.is(url, `${baseUrl}mrbabbs`);
    },
  };

  searchUsers(client, baseUrl)('mrbabbs');
});
