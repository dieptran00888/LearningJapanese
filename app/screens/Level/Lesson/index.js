import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Content, Text, Header, Body, Title, Left, Icon, Button, Right,
} from 'native-base';
import {
  FlatList, View, TouchableHighlight, Image,
} from 'react-native';
import lessonSelectors from '~/domain/selectors/lesson';
import { Actions } from 'react-native-router-flux';
import icons from '~/assets/images';
import {
  NAVIGATION_COLOR, TOUCHABLE_COLOR, CIRCLE_TIMELINE_LEVEL_COLOR, CIRCLE_INLINE_LEVEL_COLOR,
} from '~/configs/appColor';

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
          backgroundColor: NAVIGATION_COLOR,
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
            {this.props.level.levelName}
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
        underlayColor={TOUCHABLE_COLOR}
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
                borderColor: CIRCLE_TIMELINE_LEVEL_COLOR,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 25,
                  backgroundColor: CIRCLE_INLINE_LEVEL_COLOR,
                }}
              />
            </View>
            {!isLastCell ? this.renderLineConnection() : null}
          </View>
          <View style={{
            justifyContent: 'center',
            borderBottomWidth: !isLastCell ? 1 : 0,
            borderBottomColor: CIRCLE_TIMELINE_LEVEL_COLOR,
            flex: 5,
            marginRight: 10,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 5,
              justifyContent: 'center',
            }}
          >
            <Text>Lesson {lesson.lessonNumber}</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              transparent
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
              }}
            >
              <Image source={icons.love}></Image>
            </Button>
          </View>
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
        backgroundColor: CIRCLE_TIMELINE_LEVEL_COLOR,
      }}
    />
  )

  onPress(lesson) {
    Actions.words({ lesson });
  }
}
