import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import level from '~/domain/reducers/level';
import lesson from '~/domain/reducers/lesson';
import word from '~/domain/reducers/word';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  level,
  lesson,
  word,
});

export default persistReducer(rootPersistConfig, rootReducer);
