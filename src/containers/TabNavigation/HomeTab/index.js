import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Content } from 'native-base';
import CardComponent from '../../CardComponent';
import { styles } from './styles';

export class HomeTab extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Icon
          style={{ paddingLeft: 20 }}
          name="md-camera"
          size={30}
        />
      ),
      title: "Instagram Clone",
      headerRight: (
        <Icon
          style={{ paddingRight: 20 }}
          name="md-person-add"
          size={30}
        />
      ),
      headerTitleStyle:{
      	fontSize:24,
        fontWeight:'500',
        flex: 1,
        textAlign: 'center',
      	alignSelf:'center'
      }
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Content>
      </Container>
    );
  }
}
