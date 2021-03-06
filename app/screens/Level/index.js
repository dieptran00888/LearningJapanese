import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container, Content, Header, Title, View, Text, Body,
} from 'native-base';
import { FlatList, TouchableHighlight } from 'react-native';
import levelSelectors from '~/domain/selectors/level';
import { fetchData } from '~/domain/actions/level';
import { getLessonsByLevel } from '~/domain/actions/lesson';
import { Actions } from 'react-native-router-flux';
import { NAVIGATION_COLOR, CIRCLE_INLINE_LEVEL_COLOR, TOUCHABLE_COLOR } from '~/configs/appColor';

@connect(
  state => ({
    levels: levelSelectors.getLevels(state),
  }),
  { fetchData, getLessonsByLevel },
)

export default class Level extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Container>
        <Header
          iosBarStyle='light-content'
          androidStatusBarColor='white'
          style={{
            backgroundColor: NAVIGATION_COLOR,
          }}
        >
          <Body>
            <Title
              style={{
                color: 'white',
              }}
            >
              Levels
            </Title>
          </Body>
        </Header>
        <Content>
          {this.renderLevels()}
        </Content>
      </Container>
    );
  }

  renderLevels() {
    const { levels } = this.props;
    return (
      <FlatList
        data={levels}
        renderItem={({ item }) => this.renderLevel(item)}
        keyExtractor={level => level.levelId.toString()}
      />
    );
  }

  renderLevel(level) {
    const { levels } = this.props;
    const isFirstCell = level.levelId === levels[0].levelId;
    const isLastCell = level.levelId === levels[levels.length - 1].levelId;
    return (
      <TouchableHighlight
        underlayColor={TOUCHABLE_COLOR}
        onPress={() => this.onPress(level)}
      >
        <View
          style={{
            height: 140,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: isLastCell ? 'flex-start' : (isFirstCell ? 'flex-end' : 'center'),
              alignItems: 'center',
            }}>
            {!isFirstCell ? this.renderLineConnection() : null}
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: NAVIGATION_COLOR,
                borderWidth: 3,
              }}
            >
              <Text style={{ color: NAVIGATION_COLOR, fontWeight: '800', fontSize: 22 }}>N{level.levelId}</Text>
            </View>
            {!isLastCell ? this.renderLineConnection() : null}
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              borderBottomWidth: !isLastCell ? 1 : 0,
              borderBottomColor: CIRCLE_INLINE_LEVEL_COLOR,
            }}
          >
            <Text style={{ margin: 10 }}>Description N{level.levelId}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderLineConnection = () => (
    <View style={{ height: 40, backgroundColor: NAVIGATION_COLOR, width: 2 }} ></View>
  )

  onPress(item) {
    this.props.getLessonsByLevel({ levelId: item.levelId });
    Actions.lesson({ level: item });
  }
}
