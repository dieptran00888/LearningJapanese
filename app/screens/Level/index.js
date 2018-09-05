import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Content, Text,
} from 'native-base';

import levelSelectors from '~/domain/selectors/level';
import { Actions } from 'react-native-router-flux';

@connect(
  state => ({
    currentData: levelSelectors.getCurrentData(state),
  }),
  {},
)

export default class Level extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Level Content</Text>
        </Content>
      </Container>
    );
  }
}
