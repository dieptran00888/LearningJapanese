import { all, takeLatest } from 'redux-saga/effects';
import getLessonsByLevel from '~/domain/sagas/lesson/getLessonsByLevel';
import types from '~/domain/types';

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(types.lesson.getLessonsByLevel, getLessonsByLevel),
    ]);
  },
];
