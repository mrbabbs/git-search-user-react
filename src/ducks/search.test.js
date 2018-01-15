import test from 'ava';

import reducer, {
  searchTerm,
  searchTermSuccess,
  searchTermFail
} from './search';

test('has initial state', t => {
  t.deepEqual(
    reducer(undefined, {}),
    { term: '', users: [], loading: false, error: null }
  );
});

test('sets the state on SEARCH_TERM action', t => {
  const state = { term: '', users: [], loading: false, error: true };
  const newState = reducer(
    state,
    searchTerm('mrbabbs')
  );

  t.deepEqual(newState, {
    ...state,
    term: 'mrbabbs',
    loading: true,
    error: null
  });
});

test('sets the state on SEARCH_TERM_SUCCESS action', t => {
  const state = { term: 'biteone', users: [], loading: true, error: null };
  const newState = reducer(
    state,
    searchTermSuccess([{ username: 'biteone', imgUrl: 'fakeUrl' }])
  );

  t.deepEqual(newState, {
    ...state,
    users: [{ username: 'biteone', imgUrl: 'fakeUrl' }],
    loading: false,
  });
});

test('sets the state on SEARCH_TERM_FAIL action', t => {
  const error = new Error();
  const state = { term: 'biteone', users: [], loading: true, error: null };
  const newState = reducer(
    state,
    searchTermFail(error)
  );

  t.deepEqual(newState, {
    ...state,
    loading: false,
    error 
  });
});
