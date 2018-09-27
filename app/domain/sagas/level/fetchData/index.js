import { call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { getLevels } from '~/data/allSchemas';
import { loadLevelsSuccess } from '~/domain/actions/level';

function* getLevelsFromDatabase() {
  try {
    const data = yield call(getLevels);
    return data;
  } catch (error) {
    console.log('Get levels in saga', error);
  }
  return null;
}

export default function* () {
  try {
    const levels = yield call(getLevelsFromDatabase);
    yield delay(100);
    yield put(
      loadLevelsSuccess(
        levels,
      ),
    );
  } catch (error) {
    console.log(error);
  }
}
