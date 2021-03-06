import Realm from 'realm';

export const LEVEL_SCHEMA = 'Level';
export const LESSON_SCHEMA = 'Lesson';
export const ALPHABET_SCHEMA = 'Alphabet';
export const KANJI_WORD_SCHEMA = 'KanjiWord';
export const SENTENCE_SCHEMA = 'Sentence';
export const DICTIONARY_SCHEMA = 'DictionaryViJa';

const database = {
  path: '/Users/tran.xuan.diep/Desktop/workspace/LearningJapanese/app/data/KanjiFlashCard.realm',
};

// Queries

// Level
export const getLevels = () => new Promise((resolve, reject) => {
  Realm.open(database).then((realm) => {
    const levels = realm.objects(LEVEL_SCHEMA)
      .map(level => Object.assign({}, level))
      .sort((a, b) => a.levelId < b.levelId);
    resolve(levels);
  }).catch((error) => {
    reject(error);
  });
});

// Lessons
export const getLessons = levelId => new Promise((resolve, reject) => {
  Realm.open(database).then((realm) => {
    const lessons = realm.objects(LESSON_SCHEMA)
      .filtered('levelId == $0', levelId)
      .map(lesson => Object.assign({}, lesson))
      .sort((a, b) => a.lessonId > b.lessonId);
    resolve(lessons);
  }).catch((error) => {
    reject(error);
  });
});

// Words
export const getWords = (levelId, lessonId) => new Promise((resolve, reject) => {
  Realm.open(database).then((realm) => {
    const words = realm.objects(KANJI_WORD_SCHEMA)
      .filtered('levelId == $0 && lessonId == $1', levelId, lessonId)
      .map(word => Object.assign({}, word));
    resolve(words);
  }).catch((error) => {
    reject(error);
  });
});

export default new Realm(database);
