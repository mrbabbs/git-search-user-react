import test from 'ava';
import { testSaga } from 'redux-saga-test-plan';
import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import '../test-utils';
import reducer, {
  SEARCH_USERS,
  searchUsers,
  searchUsersSuccess,
  searchUsersFail,
  searchUsersFn,
  searchSaga,
} from './search';

const config = { apiUrl: 'fake.api' };

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
  });
});

test('sets the state on SEARCH_USERS_SUCCESS action', (t) => {
  const state = {
    term: 'biteone', users: [], loading: true, error: null,
  };
  const newState = reducer(
    state,
    searchUsersSuccess([{ username: 'biteone', imgUrl: 'fakeUrl' }]),
  );

  t.deepEqual(newState, {
    ...state,
    users: [{ username: 'biteone', imgUrl: 'fakeUrl' }],
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
  testSaga(searchSaga, config)
    .next()
    .fork(takeLatest, SEARCH_USERS, searchUsersFn, config.apiUrl)
    .next()
    .isDone();

  t.pass();
});

test('searches users on success dispatches SEARCH_USERS_SUCCESS', (t) => {
  const term = 'mrbabbs';
  const users = [{ login: term, avatar_url: 'fake.url' }];

  testSaga(searchUsersFn, config.apiUrl, { payload: term })
    .next()
    .call(axios.get, config.apiUrl + term)
    .next({ data: { items: users } })
    .put(searchUsersSuccess([{ username: term, imgUrl: 'fake.url' }]))
    .next()
    .isDone();

  t.pass();
});

test('searches users on fails dispatches SEARCH_USERS_FAIL', (t) => {
  const term = 'mrbabbs';
  const error = new Error();

  testSaga(searchUsersFn, config.apiUrl, { payload: term })
    .next()
    .call(axios.get, config.apiUrl + term)
    .next(error)
    .put(searchUsersFail(error))
    .next()
    .isDone();

  t.pass();
});
