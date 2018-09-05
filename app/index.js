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
} from '~/configs/sceneKey';
import { Router, Scene } from 'react-native-router-flux';
import Favorite from '~/screens/Favorite';
import Alphabet from '~/screens/Alphabet';
import WordDetection from '~/screens/WordDetection';
import { Text } from 'native-base';

type Props = {};

const TabIcon = ({ selected }) => (
  <Text style={{ color: selected ? 'blue' : 'gray' }}></Text>
);
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={redux.store}>
        <PersistGate persistor={redux.persistor}>
          <Router>
            <Scene key='root' tabs={true}>
              <Scene key={FLASHCARD_TAB_ITEM_KEY} title='ICON1' icon={TabIcon}>
                <Scene key={KANJI_FLASHCARD_SCENE_KEY} component={Level} title='Level'/>
              </Scene>
              <Scene key={FAVORITE_TAB_ITEM_KEY} title='ICON2' icon={TabIcon}>
                <Scene key={FAVORITE_SCENE_KEY} component={Favorite} title='Favorite'></Scene>
              </Scene>
              <Scene key={ALPHABET_TAB_ITEM_KEY} title='ICON3' icon={TabIcon}>
                <Scene key={ALPHABET_SCENE_KEY} component={Alphabet} title='Alphabet' icon={TabIcon}></Scene>
              </Scene>
              <Scene key={WORD_DETECTION_TAB_ITEM_KEY} title='ICON4' icon={TabIcon}>
                <Scene key={WORD_DETECTION_SCENE_KEY} component={WordDetection} title='Word Detection' icon={TabIcon}></Scene>
              </Scene>
            </Scene>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
