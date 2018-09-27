import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Content, Text, Header, Body, Title, Left, Icon, Button, Right,
} from 'native-base';
import {
  FlatList, View,
} from 'react-native';
import lessonSelectors from '~/domain/selectors/lesson';
import { Actions } from 'react-native-router-flux';

@connect(
  state => ({
    lessons: lessonSelectors.getLessons(state),
  }),
)

export default class Lesson extends Component {
  render() {
    return (
      <Container>
        {this.renderHeader()}
        {this.renderContent()}
      </Container>
    );
  }

  renderHeader() {
    return (
      <Header
        iosBarStyle='light-content'
        androidStatusBarColor='white'
        style={{
          backgroundColor: '#375a7f',
        }}
      >
        <Left>
          <Button
            transparent
            onPress={() => this.onBack()}
            backgroundColor='white'
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
            Lesson
          </Title>
        </Body>
        <Right/>
      </Header>
    );
  }

  onBack() {
    Actions.pop();
  }

  renderContent() {
    return (
      <Content>
        <FlatList
          data={this.props.lessons}
          renderItem={({ item }) => this.renderLesson(item)}
          keyExtractor={item => item.lessonId.toString()}
        />
      </Content>
    );
  }

  renderLesson = lesson => (
    <View><Text>Lesson {lesson.lessonNumber}</Text></View>
  )
}
