import { fork, all } from 'redux-saga/effects';
import level from '~/domain/sagas/level';
import lesson from '~/domain/sagas/lesson';
import word from '~/domain/sagas/word';
/* eslint-disable */
const sagas = function*() {
  yield all([
    ...level.map(watcher => fork(watcher)),
    ...lesson.map(watcher => fork(watcher)),
    ...word.map(watcher => fork(watcher)),
  ]);
};

export default sagas;
