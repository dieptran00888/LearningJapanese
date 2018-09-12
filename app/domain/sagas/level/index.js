import { all, takeLatest } from 'redux-saga/effects';
import fetchData from '~/domain/sagas/level/fetchData';
import types from '~/domain/types';

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(types.level.fetchData, fetchData),
    ]);
  },
];
