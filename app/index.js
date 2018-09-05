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

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={redux.store}>
        <PersistGate persistor={redux.persistor}>
          <Level/>
        </PersistGate>
      </Provider>
    );
  }
}
