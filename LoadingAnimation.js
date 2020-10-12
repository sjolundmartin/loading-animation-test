import React, { Component } from 'react';
import { View, Image, StyleSheet, Animated, Text, TouchableHighlight } from 'react-native';


export default class LoadingAnimation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      uri: require('./assets/spinner.png'),
      animate: true
    };
    this.loadingSpin = new Animated.Value(0)
    setTimeout(() => this.changeImage(), this.props.delay);
  }

  changeImage(){
    this.setState({uri: require('./assets/tick2.png')});
    this.setState({animate: false});
  }

  spinAnimation(){
    if(this.state.animate){
      this.loadingSpin.setValue(0);
      Animated.sequence([
        Animated.timing(
          this.loadingSpin,
          {
            toValue: 1,
            duration: 500,
          }
        )
      ]).start(()=> this.spinAnimation());
    }
  }

  componentDidMount(){
    this.spinAnimation();
  }

  reset(e){
    e();
  }

  render() {
    const spin = this.loadingSpin.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View style={styles.container}>
        <Image
        source={require('./assets/cloud.png')}
        style={styles.cloud}
        />

        <Animated.Image
        source={this.state.uri}
        style={[{transform: [{rotate: spin}]}, styles.spinner]}
        />
        {this.state.animate && <Text style={styles.description}>
          Compressing and uploading images.
          {"\n"}
          Please wait.
        </Text>}

        {!this.state.animate && <Text style={styles.description}>
          Finished!
        </Text>}

        <TouchableHighlight
          style={styles.hiddenButton}
          onPress={()=>this.reset(this.props.reset)}>
          <Text></Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloud: {
    position: 'absolute',
    height: 150,
    width: 200,
    bottom: 400,
  },
  spinner:{
    height: 80,
    width: 80,
    position: 'absolute',
    bottom: 420,
  },
  description:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    bottom: 330,
  },
  hiddenButton:{
    flex:1,
    height: '20%',
    width: '95%',
    position: 'absolute',
    bottom: 10,
  }
});
