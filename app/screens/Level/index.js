import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import levelSelectors from '~/domain/selectors/level';

@connect(
  state => ({
    currentData: levelSelectors.getCurrentData(state),
  }),
  {},
)

export default class Level extends Component {
  render() {
    return (
      <View></View>
    );
  }
}
