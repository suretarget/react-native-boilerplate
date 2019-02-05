import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base'
import { styles } from './styles';

export class StoriesTab extends Component {
  render() {
    return (
      <View style={styles.centerWrapper}>
        <Text>Stories Tab!</Text>
      </View>
    );
  }
}
