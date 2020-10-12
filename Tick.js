import React, { Component } from 'react';
import { View, Image, StyleSheet,TouchableHighlight } from 'react-native';

export default class DisplayImage extends Component {

  render() {
    return (
      <View style={styles.tickContainer}>
        <Image
          source={require('./assets/tick.png')}
          style={styles.tick}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tick:{
    width: 30,
    height: 30,
    marginLeft: 105,
    marginTop: 2,
  },
  tickContainer:{
    flex:1,
    position: 'absolute',
    zIndex: 11,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
