import React, { Component } from 'react';
import {
  Container, Header, Body, Left, Right, Button, Icon, Content, Title, Fab,
} from 'native-base';
import {
  Image, View, Text,
} from 'react-native';
import icons from '~/assets/images';
import { Actions } from 'react-native-router-flux';
import { NAVIGATION_COLOR } from '~/configs/appColor';

export default class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListView: true,
    };
  }

  render() {
    return (
      <Container>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFab()}
      </Container>
    );
  }

  renderHeader() {
    return (
      <Header
      iosBarStyle='light-content'
      androidStatusBarColor='white'
      style={{
        backgroundColor: NAVIGATION_COLOR,
      }}
      >
        <Left>
          <Button
            transparent
            onPress={() => this.onBack()}
          >
            <Icon
              name='arrow-back'
              style={{
                color: 'white',
              }}
            />
          </Button>
        </Left>
        <Body>
          <Title
            style={{
              color: 'white',
            }}
          >
            Lesson {this.props.lesson.lessonNumber}
          </Title>
        </Body>
        <Right>
          <Button transparent>
            <Image
              source={icons.test}
              style={{
                tintColor: 'white',
              }}
            />
          </Button>
        </Right>
      </Header>
    );
  }

  renderContent() {
    return (
      <Content>
        <Text></Text>
      </Content>
    );
  }

  renderFab() {
    return (
      <Fab
        position='bottomRight'
        direction='up'
        active={this.state.isListView}
        // containerStyle={{ }}
        style={{ backgroundColor: NAVIGATION_COLOR, position: 'absolute' }}
        onPress={() => this.changeWordsView()}
      >
        <Image
          source={this.state.isListView ? icons.cardLayout : icons.listLayout}
          style={{
            tintColor: 'white',
          }}
        />
      </Fab>
    );
  }

  onBack() {
    Actions.pop();
  }

  changeWordsView() {
    this.setState({ isListView: !this.state.isListView });
  }
}
