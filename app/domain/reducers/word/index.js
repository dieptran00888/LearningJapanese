import types from '~/domain/types';

const initData = {
  words: [],
};

export default(state = initData, { type, payload }) => {
  switch (type) {
    case types.word.loadWordsSuccess:
      return {
        ...state,
        words: payload,
      };
    default:
      return state;
  }
};
