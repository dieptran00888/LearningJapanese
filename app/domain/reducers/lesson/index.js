import types from '~/domain/types';

const initData = {
  lessons: [],
};

export default(state = initData, { type, payload }) => {
  switch (type) {
    case types.lesson.loadLessonsSuccess:
      return {
        ...state,
        lessons: payload,
      };
    default:
      return state;
  }
};
