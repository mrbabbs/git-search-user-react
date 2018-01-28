import { createAction, handleActions } from 'redux-actions';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

const initialState = {
  term: '',
  users: [],
  loading: false,
  error: null,
};

export const emptyUsersList =
  Array(...{ length: 10 }).map((el, id) => ({ id }));

export const SEARCH_USERS = 'SEARCH_USERS';
export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS';
export const SEARCH_USERS_FAIL = 'SEARCH_USERS_FAIL';

export const searchUsers = createAction(SEARCH_USERS);
export const searchUsersSuccess = createAction(SEARCH_USERS_SUCCESS);
export const searchUsersFail = createAction(SEARCH_USERS_FAIL);

const searchReducer = (state = {}, { payload } = {}) => ({
  ...state,
  loading: !!payload,
  error: null,
  term: payload,
  users: payload ? emptyUsersList : [],
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

export function* searchUsersFn(client, { payload }) {
  if (!payload) return;

  try {
    yield call(delay, 500);

    const { data } = yield call(client, payload);
    const users = data.items.map(user => ({
      id: user.id,
      username: user.login,
      imgUrl: user.avatar_url,
    }));

    yield put(searchUsersSuccess(users));
  } catch (error) {
    yield put(searchUsersFail(error));
  }
}

export function* searchSaga(client) {
  yield fork(
    takeLatest,
    SEARCH_USERS,
    searchUsersFn,
    client,
  );
}

export default reducer;
