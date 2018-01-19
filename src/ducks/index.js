import search, { searchSaga } from './search';

function* sagas(config) {
  yield searchSaga(config);
}

export default {
  reducers: { search },
  sagas,
};
