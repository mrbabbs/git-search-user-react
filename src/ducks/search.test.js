import test from 'ava';

import reducer, { SEARCH_TERM, searchTerm } from './search';

test('has initialState', t => {
  t.deepEqual(reducer(undefined, {}), '');
});

test('sets the state on SEARCH action', t => {
  t.is(reducer('', searchTerm('a')), 'a');
});