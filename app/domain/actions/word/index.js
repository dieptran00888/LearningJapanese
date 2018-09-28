import types from '~/domain/types';

export const getWords = payload => ({
  type: types.word.getWords,
  payload,
});

export const loadWordsSuccess = payload => ({
  type: types.word.loadWordsSuccess,
  payload,
});

export default {
  getWords,
  loadWordsSuccess,
};
