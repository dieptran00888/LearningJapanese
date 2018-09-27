import types from '~/domain/types';

export const getLessonsByLevel = payload => ({
  type: types.lesson.getLessonsByLevel,
  payload,
});

export const loadLessonsSuccess = payload => ({
  type: types.lesson.loadLessonsSuccess,
  payload,
});

export default {
  getLessonsByLevel,
  loadLessonsSuccess,
};
