import { all, takeLatest } from 'redux-saga/effects';
import getWords from '~/domain/sagas/word/getWords';
import types from '~/domain/types';

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(types.word.getWords, getWords),
    ]);
  },
];
