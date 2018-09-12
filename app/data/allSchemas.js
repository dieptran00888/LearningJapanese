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
    const levels = realm.objects(LEVEL_SCHEMA).map(level => Object.assign({}, level));
    resolve(levels);
  }).catch((error) => {
    reject(error);
  });
});

// Lessons
export const getLessonsByLevel = levelId => new Promise((resolve, reject) => {
  Realm.open(database).then((realm) => {
    const lessons = realm.objects(LESSON_SCHEMA).filtered('levelId = $0', levelId).map(level => Object.assign({}, level));
    resolve(lessons);
  }).catch((error) => {
    reject(error);
  });
});

// Words

export default new Realm(database);
