import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Content, Text, Header, Title,
} from 'native-base';
import levelSelectors from '~/domain/selectors/level';
import { fetchData } from '~/domain/actions/level';
// import realm, { getLevels } from '~/data/allSchemas';

@connect(
  state => ({
    levels: levelSelectors.getLevels(state),
  }),
  { fetchData },
)

export default class Level extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props);
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
