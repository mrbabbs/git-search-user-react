import { combineReducers } from 'redux';

import ducks from './ducks/';

export const rootReducer = combineReducers(ducks.reducers);
export const rootSaga = ducks.sagas;

