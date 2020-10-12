import React, { Component } from 'react';
import { View, Image, StyleSheet,TouchableHighlight } from 'react-native';
import Tick from './Tick'

export default class DisplayImage extends Component {

  constructor(props){
    super(props);
    this.state ={
      selectedOne: false,
      selectedTwo: false,
      selectedThree: false,
      selectedFour: false,
      selectedFive: false,
      selectedSix: false,
      booleans: 0,
      update: true,
      overOne: false,
    }
  }

  updateButton(){
    if(this.state.booleans == 0){
      this.setState({overOne: false});
      return true;
    }
    else if(this.state.booleans == 1 && !this.state.overOne){
      this.setState({overOne: true})
      return true;
    }
  }

  calcBooleans(selected){
    if(selected == true){
      this.setState({booleans: this.state.booleans + 1});
    }
    else if(selected == false){
      this.setState({booleans: this.state.booleans - 1});
    }
  }

  async changeStateOne(e){
    await this.setState({selectedOne: !this.state.selectedOne});
    this.calcBooleans(this.state.selectedOne);
    if (this.updateButton()) {
      e();
      this.setState({update: false});
    }
  }

  async changeStateTwo(e){
    await this.setState({selectedTwo: !this.state.selectedTwo});
    this.calcBooleans(this.state.selectedTwo);
    if (this.updateButton()) {
      e();
      this.setState({update: false});
    }
  }
  async changeStateThree(e){
    await this.setState({selectedThree: !this.state.selectedThree});
    this.calcBooleans(this.state.selectedThree);
    if (this.updateButton()) {
      e();
      this.setState({update: false});
    }
  }
  async changeStateFour(e){
    await this.setState({selectedFour: !this.state.selectedFour});
    this.calcBooleans(this.state.selectedFour);
    if (this.updateButton()) {
      e();
      this.setState({update: false});
    }
  }
  async changeStateFive(e){
    await this.setState({selectedFive: !this.state.selectedFive});
    this.calcBooleans(this.state.selectedFive);
    if (this.updateButton()) {
      e();
      this.setState({update: false});
    }
  }
  async changeStateSix(e){
    await this.setState({selectedSix: !this.state.selectedSix});
    this.calcBooleans(this.state.selectedSix);
    if (this.updateButton()) {
      e();
      this.setState({update: false});
    }
  }

  twoMethods(e){
    this.changeStateOne();
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          {this.state.selectedOne && <Tick/>}
          <TouchableHighlight
            onPress={()=>this.changeStateOne(this.props.toggle)}
            style={styles.highlight}>
              <Image
                style={styles.imageStyle}
                source={require('./assets/cliff.jpeg')}
              />
          </TouchableHighlight>
        </View>

        <View style={styles.imageContainer}>
          {this.state.selectedTwo && <Tick/>}
          <TouchableHighlight
            onPress={()=>this.changeStateTwo(this.props.toggle)}
            style={styles.highlight}>
              <Image
                style={styles.imageStyle}
                source={require('./assets/dog.jpeg')}
              />
          </TouchableHighlight>
        </View>

        <View style={styles.imageContainer}>
          {this.state.selectedThree && <Tick/>}
          <TouchableHighlight
            onPress={()=>this.changeStateThree(this.props.toggle)}
            style={styles.highlight}>
              <Image
                style={styles.imageStyle}
                source={require('./assets/eye.jpeg')}
              />
          </TouchableHighlight>
        </View>

        <View style={styles.imageContainer}>
          {this.state.selectedFour && <Tick/>}
          <TouchableHighlight
            onPress={()=>this.changeStateFour(this.props.toggle)}
            style={styles.highlight}>
              <Image
                style={styles.imageStyle}
                source={require('./assets/man.jpeg')}
              />
          </TouchableHighlight>
        </View>

        <View style={styles.imageContainer}>
          {this.state.selectedFive && <Tick/>}
          <TouchableHighlight
            onPress={()=>this.changeStateFive(this.props.toggle)}
            style={styles.highlight}>
              <Image
                style={styles.imageStyle}
                source={require('./assets/turtle.jpeg')}
              />
          </TouchableHighlight>
        </View>

        <View style={styles.imageContainer}>
          {this.state.selectedSix && <Tick/>}
          <TouchableHighlight
            onPress={()=>this.changeStateSix(this.props.toggle)}
            style={styles.highlight}>
              <Image
                style={styles.imageStyle}
                source={require('./assets/puppy.jpeg')}
              />
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  imageContainer:{
    backgroundColor: 'red',
    width: '33.3%',
    aspectRatio: 1/1,
  },
  imageStyle:{
    flex: 1,
    aspectRatio: 1/1,
  },
  highlight:{
    backgroundColor: 'red',
    flex: 1,
    aspectRatio: 1/1,
  }
});
