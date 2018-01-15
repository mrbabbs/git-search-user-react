import { createAction, handleActions } from 'redux-actions'

const initialState = {
  term: '',
  users: []
}

export const SEARCH_TERM = 'SEARCH_TERM';

export const searchTerm = createAction(SEARCH_TERM, term => term);

const usersList = [
  {
    username: 'mrbabbs',
    imgUrl: 'http://lorempixel.com/256/256/animals/',
  }, {
    username: 'phoenix',
    imgUrl: 'http://lorempixel.com/256/256/animals/',
  }, {
    username: 'motzard',
    imgUrl: 'http://lorempixel.com/256/256/animals/',
  }, {
    username: 'bitede',
    imgUrl: 'http://lorempixel.com/256/256/animals/',
  }, {
    username: 'duck007',
    imgUrl: 'http://lorempixel.com/256/256/animals/',
  },
];

const searchReducer = (state = {}, action = {}) => {
  return {
    ...state,
    term: action.payload,
    users: usersList.filter(user => user.username.includes(action.payload))
  }
}

const reducer = handleActions({
  [SEARCH_TERM]: searchReducer,
}, initialState);

export default reducer;
