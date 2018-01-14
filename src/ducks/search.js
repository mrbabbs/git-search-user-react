import { createAction, handleActions } from 'redux-actions'

const initialState = ''

export const SEARCH_TERM = 'SEARCH_TERM';

export const searchTerm = createAction(SEARCH_TERM, term => term);

const reducer = handleActions({
  [SEARCH_TERM]: (state, action = {}) => action && action.payload
}, initialState);

export default reducer;
