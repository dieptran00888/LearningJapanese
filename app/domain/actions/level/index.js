import types from '~/domain/types';

export const fetchData = payload => ({
  type: types.level.fetchData,
  payload,
});

export const loadLevelsSuccess = payload => ({
  type: types.level.loadLevelsSuccess,
  payload,
});

export default {
  fetchData,
  loadLevelsSuccess,
};
