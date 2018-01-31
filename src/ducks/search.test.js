import test from 'ava';
import { testSaga } from 'redux-saga-test-plan';
import { takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import '../test-utils';
import users from '../fixtures/users.json';
import apiUsers from '../fixtures/api-users.json';
import reducer, {
  SEARCH_USERS,
  searchUsers,
  searchUsersSuccess,
  searchUsersFail,
  searchUsersFn,
  searchSaga,
  emptyUsersList,
} from './search';

const client = {
  fetchUsers() { return true; },
  fetchImages() { return true; },
};

test('has initial state', (t) => {
  t.deepEqual(
    reducer(undefined, {}),
    {
      term: '', users: [], loading: false, error: null,
    },
  );
});

test('sets the state on SEARCH_USERS action', (t) => {
  const state = {
    term: '', users: [], loading: false, error: true,
  };
  const newState = reducer(
    state,
    searchUsers('mrbabbs'),
  );

  t.deepEqual(newState, {
    ...state,
    term: 'mrbabbs',
    loading: true,
    error: null,
    users: emptyUsersList,
  });
});

test('sets empty users list on SEARCH_USERS action', (t) => {
  const state = {
    term: '', users: [], loading: false, error: true,
  };
  const newState = reducer(
    state,
    searchUsers('mrbabbs'),
  );

  t.is(newState.users.length, 10);
});

test('sets empty users on SEARCH_USERS action with empty query', (t) => {
  const state = {
    term: '', users: [], loading: false, error: true,
  };
  const newState = reducer(
    state,
    searchUsers(''),
  );

  t.deepEqual(newState, {
    ...state,
    users: [],
    term: '',
    loading: false,
    error: null,
  });
});

test('sets the state on SEARCH_USERS_SUCCESS action', (t) => {
  const state = {
    term: 'biteone', users: [], loading: true, error: null,
  };
  const newState = reducer(
    state,
    searchUsersSuccess(users),
  );

  t.deepEqual(newState, {
    ...state,
    users,
    loading: false,
  });
});

test('sets the state on SEARCH_USERS_FAIL action', (t) => {
  const error = new Error();
  const state = {
    term: 'biteone', users: [], loading: true, error: null,
  };
  const newState = reducer(
    state,
    searchUsersFail(error),
  );

  t.deepEqual(newState, {
    ...state,
    loading: false,
    error,
  });
});

test('has saga', (t) => {
  testSaga(searchSaga, client)
    .next()
    .fork(takeLatest, SEARCH_USERS, searchUsersFn, client)

    .next()
    .isDone();

  t.pass();
});

test('ignores SEARCH_USERS action on empty query', (t) => {
  testSaga(searchUsersFn, client, { payload: '' })
    .next()
    .isDone();

  t.pass();
});

test('searches users on success dispatches SEARCH_USERS_SUCCESS', (t) => {
  const term = 'mrbabbs';
  // eslint-disable-next-line
  const imageUrls = apiUsers.map(({ avatar_url }) => avatar_url);

  testSaga(searchUsersFn, client, { payload: term })
    .next()
    .call(delay, 500)

    .next()
    .call(client.fetchUsers, term)

    .next({ data: { items: apiUsers } })
    .call(client.fetchImages, imageUrls)

    .next()
    .put(searchUsersSuccess(users))

    .next()
    .isDone();

  t.pass();
});

test('searches users on fail dispatches SEARCH_USERS_FAIL', (t) => {
  const term = 'mrbabbs';
  const error = new Error();

  testSaga(searchUsersFn, client, { payload: term })
    .next()
    .call(delay, 500)

    .next()
    .call(client.fetchUsers, term)

    .throw(error)
    .put(searchUsersFail(error))

    .next()
    .isDone();

  t.pass();
});

test('searches users on fail images doesn\'t fail', (t) => {
  const term = 'mrbabbs';

  testSaga(searchUsersFn, client, { payload: term })
    .next()
    .call(delay, 500)

    .next()
    .call(client.fetchUsers, term)

    .next({ data: { items: [] } })
    .call(client.fetchImages, [])

    .throw()
    .put(searchUsersSuccess([]))

    .next()
    .isDone();

  t.pass();
});
