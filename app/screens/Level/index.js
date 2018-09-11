import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Content, Text, Header, Title,
} from 'native-base';
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
      <Container>
        <Header>
          <Title>Test</Title>
        </Header>
        <Content>
          <Text>Level Content</Text>
        </Content>
      </Container>
    );
  }
}
