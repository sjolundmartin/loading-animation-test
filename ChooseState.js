import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableHighlight, Text } from 'react-native';


export default class LoadingAnimation extends Component {

    constructor(props){
      super(props);
    }

    continue(e){
      e();
    }

    setToText(e){
      e();
    }

    render(){
      return(
        <View style={styles.container}>

        <View style={styles.button}>
          <TouchableHighlight
            onPress={()=>this.setToText(this.props.text)}
            style={styles.highlight}>
            <Text>WITH TEXT</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.button}>
          <TouchableHighlight
            onPress={()=>this.continue(this.props.continue)}
            style={styles.highlight}>
            <Text>WITHOUT TEXT</Text>
          </TouchableHighlight>
        </View>

        </View>
      );
    }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#2B8AD8',
    height: '10%',
    width: '95%',
    borderRadius: 6,
    marginTop: 10,
  },
  highlight:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
