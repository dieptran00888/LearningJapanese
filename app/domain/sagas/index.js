import { fork, all } from 'redux-saga/effects';
import level from '~/domain/sagas/level';
import lesson from '~/domain/sagas/lesson';
/* eslint-disable */
const sagas = function*() {
  yield all([
    ...level.map(watcher => fork(watcher)),
    ...lesson.map(watcher => fork(watcher))]);
};

export default sagas;
