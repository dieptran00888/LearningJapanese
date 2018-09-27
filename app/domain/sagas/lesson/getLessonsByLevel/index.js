import { getLessons } from '~/data/allSchemas';
import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { loadLessonsSuccess } from '~/domain/actions/lesson';

function* getLessonsByLevel(levelId) {
  try {
    const data = yield call(getLessons, levelId);
    return data;
  } catch (error) {
    console.log('Lesson saga error', error);
  }
  return null;
}

export default function* (action) {
  try {
    const { levelId } = action.payload;
    const lessons = yield call(getLessonsByLevel, levelId);
    yield delay(1000);
    yield put(
      loadLessonsSuccess(
        lessons,
      ),
    );
  } catch (error) {
    console.log(error);
  }
}
