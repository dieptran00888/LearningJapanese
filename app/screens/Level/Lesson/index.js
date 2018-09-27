import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Content, Text, Header, Body, Title, Left, Icon, Button, Right,
} from 'native-base';
import {
  FlatList, View, TouchableHighlight,
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

  renderLesson(lesson) {
    const { lessons } = this.props;
    const isFirstCell = lesson.lessonId === lessons[0].lessonId;
    const isLastCell = lesson.lessonId === lessons[lessons.length - 1].lessonId;
    return (
      <TouchableHighlight
        underlayColor='#d9e6f2'
        onPress={() => this.onPress(lesson)}
      >
        <View style={{ flexDirection: 'row', height: 50 }}>
          <View
            style={{
              justifyContent: isLastCell ? 'flex-start' : (isFirstCell ? 'flex-end' : 'center'),
              alignItems: 'center',
              flex: 1,
            }}
          >
            {!isFirstCell ? this.renderLineConnection() : null}
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 25,
                borderWidth: 10,
                borderColor: '#dadada',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 25,
                  backgroundColor: '#aaaaaa',
                }}
              />
            </View>
            {!isLastCell ? this.renderLineConnection() : null}
          </View>
          <View style={{
            justifyContent: 'center',
            borderBottomWidth: !isLastCell ? 1 : 0,
            borderBottomColor: '#dadada',
            flex: 5,
            marginRight: 10,
          }}>
            <Text>Lesson {lesson.lessonNumber}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderLineConnection = () => (
    <View
      style={{
        width: 2,
        height: 15,
        backgroundColor: '#dadada',
      }}
    />
  )

  onPress(lesson) {
    console.log(lesson);
  }
}
