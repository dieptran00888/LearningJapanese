import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { getWords } from '~/data/allSchemas';
import { loadWordsSuccess } from '~/domain/actions/word';

function* getWordsFromDatabase(levelId, lessonId) {
  try {
    const data = yield call(getWords, levelId, lessonId);
    return data;
  } catch (error) {
    console.log('Get levels in saga', error);
  }
  return null;
}

export default function* (action) {

  try {
    const words = yield call(getWordsFromDatabase);
    yield delay(100);
    yield put(
      loadWordsSuccess(
        words,
      ),
    );
  } catch (error) {
    console.log(error);
  }
}
