import { createAction, handleActions } from 'redux-actions';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const initialState = {
  term: '',
  users: [],
  loading: false,
  error: null,
};

export const SEARCH_USERS = 'SEARCH_USERS';
export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS';
export const SEARCH_USERS_FAIL = 'SEARCH_USERS_FAIL';

export const searchUsers = createAction(SEARCH_USERS);
export const searchUsersSuccess = createAction(SEARCH_USERS_SUCCESS);
export const searchUsersFail = createAction(SEARCH_USERS_FAIL);

const searchReducer = (state = {}, action = {}) => ({
  ...state,
  loading: true,
  error: null,
  term: action.payload,
  // users: usersList.filter(user => user.username.includes(action.payload))
});

const searchSuccessReducer = (state = {}, action = {}) => ({
  ...state,
  loading: false,
  error: null,
  users: action.payload,
});

const searchFailReducer = (state = {}, action = {}) => ({
  ...state,
  loading: false,
  error: action.payload,
});

const reducer = handleActions({
  [SEARCH_USERS]: searchReducer,
  [SEARCH_USERS_SUCCESS]: searchSuccessReducer,
  [SEARCH_USERS_FAIL]: searchFailReducer,
}, initialState);

export function* searchUsersFn(apiUrl, { payload }) {
  try {
    const { data } = yield call(axios.get, apiUrl + payload);
    const users = data.items.map(user => ({ username: user.login, imgUrl: user.avatar_url }));
    yield put(searchUsersSuccess(users));
  } catch (error) {
    yield put(searchUsersFail(error));
  }
}

export function* searchSaga(config) {
  yield fork(
    takeLatest,
    SEARCH_USERS,
    searchUsersFn,
    config.apiUrl,
  );
}

export default reducer;
