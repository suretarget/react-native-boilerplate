import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export class CardComponent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Card!</Text>
      </View>
    );
  }
}
