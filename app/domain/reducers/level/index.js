import types from '~/domain/types';

const initData = {
  currentData: [
    {
      id: 1,
      name: 'Level 1',
    },
    {
      id: 2,
      name: 'Level 2',
    },
  ],
};

export default (state = initData, { type, payload }) => {
  switch (type) {
    case types.level.fetchData:
      return { ...state, currentData: payload.currentData };
    default:
      return state;
  }
};
