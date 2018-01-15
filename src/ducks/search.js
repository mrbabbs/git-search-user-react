import { createAction, handleActions } from 'redux-actions'

const initialState = {
  term: '',
  users: [],
  loading: false,
  error: null,
}

export const SEARCH_TERM = 'SEARCH_TERM';
export const SEARCH_TERM_SUCCESS = 'SEARCH_TERM_SUCCESS';
export const SEARCH_TERM_FAIL = 'SEARCH_TERM_FAIL';

export const searchTerm = createAction(SEARCH_TERM, term => term);
export const searchTermSuccess = createAction(SEARCH_TERM_SUCCESS);
export const searchTermFail = createAction(SEARCH_TERM_FAIL);

const searchReducer = (state = {}, action = {}) => {
  return {
    ...state,
    loading: true,
    error: null,
    term: action.payload
    // users: usersList.filter(user => user.username.includes(action.payload))
  }
};

const searchSuccessReducer = (state = {}, action = {}) => {
  return {
    ...state,
    loading: false,
    error: null,
    users: action.payload
  }
};

const searchFailReducer = (state = {}, action = {}) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  }
}

const reducer = handleActions({
  [SEARCH_TERM]: searchReducer,
  [SEARCH_TERM_SUCCESS]: searchSuccessReducer,
  [SEARCH_TERM_FAIL]: searchFailReducer
}, initialState);

export default reducer;
