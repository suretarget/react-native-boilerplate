import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base'
import { styles } from './styles';

export class FavouritesTab extends Component {
  render() {
    return (
      <View style={styles.centerWrapper}>
        <Text>Favourites Tab!</Text>
      </View>
    );
  }
}
