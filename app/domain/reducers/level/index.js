import types from '~/domain/types';

const initData = {
  levels: [],
};

export default (state = initData, { type, payload }) => {
  switch (type) {
    case types.level.loadLevelsSuccess:
      return {
        ...state,
        levels: payload,
      };
    default:
      return state;
  }
};
