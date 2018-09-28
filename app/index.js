/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import redux from '~/data/store/redux';
import Level from '~/screens/Level';
import {
  KANJI_FLASHCARD_SCENE_KEY, FAVORITE_SCENE_KEY, ALPHABET_SCENE_KEY, WORD_DETECTION_SCENE_KEY,
  FLASHCARD_TAB_ITEM_KEY, FAVORITE_TAB_ITEM_KEY, ALPHABET_TAB_ITEM_KEY, WORD_DETECTION_TAB_ITEM_KEY,
  LESSON_SCENE_KEY,
  SETTINGS_TAB_ITEM_KEY,
  SETTINGS_SCENE_KEY,
  WORDS_SCENE_KEY,
} from '~/configs/sceneKey';
import { Router, Scene } from 'react-native-router-flux';
import Favorite from '~/screens/Favorite';
import Alphabet from '~/screens/Alphabet';
import WordDetection from '~/screens/WordDetection';
import { Text } from 'native-base';
import Lesson from '~/screens/Level/Lesson';
import Settings from '~/screens/Settings';
import { View, Image } from 'react-native';
import icons from '~/assets/images';
import { NAVIGATION_COLOR, CIRCLE_INLINE_LEVEL_COLOR } from '~/configs/appColor';
import Words from '~/screens/Level/Lesson/Words';

type Props = {};

const TabIcon = ({ selected, image }) => (
  <View
    style={{
      marginTop: 15,
    }}
  >
    <Image
      source={image}
      style={{ tintColor: selected ? NAVIGATION_COLOR : CIRCLE_INLINE_LEVEL_COLOR }}
    />
    <Text
      style={{ color: selected ? NAVIGATION_COLOR : CIRCLE_INLINE_LEVEL_COLOR }}
    />
  </View>
);
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={redux.store}>
        <PersistGate persistor={redux.persistor}>
          <Router>
            <Scene key='root' tabs={true}>
              <Scene key={FLASHCARD_TAB_ITEM_KEY} title='Flashcard' icon={TabIcon} headerMode='none' image={icons.cards}>
                <Scene key={KANJI_FLASHCARD_SCENE_KEY} component={Level}/>
                <Scene key={LESSON_SCENE_KEY} component={Lesson}/>
                <Scene key={WORDS_SCENE_KEY} component={Words}/>
              </Scene>
              <Scene key={FAVORITE_TAB_ITEM_KEY} title='Favorites' icon={TabIcon} headerMode='none' image={icons.love}>
                <Scene key={FAVORITE_SCENE_KEY} component={Favorite}/>
              </Scene>
              <Scene key={ALPHABET_TAB_ITEM_KEY} title='Alphabet' icon={TabIcon} headerMode='none' image={icons.alphabet}>
                <Scene key={ALPHABET_SCENE_KEY} component={Alphabet} icon={TabIcon}/>
              </Scene>
              <Scene key={WORD_DETECTION_TAB_ITEM_KEY} title='Draw' icon={TabIcon} headerMode='none' image={icons.draw}>
                <Scene key={WORD_DETECTION_SCENE_KEY} component={WordDetection} icon={TabIcon}/>
              </Scene>
              <Scene key={SETTINGS_TAB_ITEM_KEY} title='Settings' icon={TabIcon} headerMode='none' image={icons.settings}>
                <Scene key={SETTINGS_SCENE_KEY} component={Settings} icon={TabIcon}/>
              </Scene>
            </Scene>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
