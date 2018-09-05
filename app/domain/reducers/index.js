import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import level from '~/domain/reducers/level';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  level,
});

export default persistReducer(rootPersistConfig, rootReducer);
