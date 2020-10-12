import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

export default class ExportButton extends Component {

  constructor(props){
    super(props);
  }

  exportImages(e){
    e();
  }

  render() {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableHighlight
            onPress={()=>this.exportImages(this.props.export)}
            style={styles.highlight}>
            <Image
              source={require('./assets/upload.png')}
              style={styles.upload}/>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#2B8AD8',
    height: '30%',
    width: '95%',
    borderRadius: 6,
    position: 'absolute',
    bottom: 10,
  },
  highlight:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upload:{
    aspectRatio: 1/1,
    height: '60%',
  }
});
