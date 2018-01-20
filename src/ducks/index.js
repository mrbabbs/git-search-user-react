import { combineReducers } from 'redux';

import search, { searchSaga } from './search';

export const rootSagas = searchSaga;

export default combineReducers({ search });
