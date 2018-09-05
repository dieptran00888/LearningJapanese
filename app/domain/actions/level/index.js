import types from '~/domain/types';

export const fetchData = payload => ({
  types: types.level.fetchData,
  payload,
});

export default {
  fetchData,
};
