import search, { searchSaga } from './search';

export function* sagas(config) {
  yield searchSaga(config);
}

export default {
  reducers: { search },
  sagas,
}
