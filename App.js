import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DisplayImage from './DisplayImage';
import ExportButton from './ExportButton';
import LoadingAnimation from './LoadingAnimation';
import LoadingAnimation2 from './LoadingAnimation2';
import ChooseState from './ChooseState';



export default class App extends React.Component {

  constructor(){
    super()
    this.state= {
      displayButton: false,
      loading: false,
      delay: 10000,
      loadingText: false,
      firstState: true,
    }
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(){
    this.setState({displayButton: !this.state.displayButton});
  }

  startLoading = () =>{
    this.setState({loading: true});
    this.setState({displayButton: false});
  }

  setToLoadingText = () =>{
    this.setState({loadingText: true});
    this.setState({firstState: false});
  }

  continue = () =>{
    this.setState({firstState: false});
  }

  resetState = () =>{
    this.setState({loading: false});
    this.setState({loadingText: false});
    this.setState({firstState: true});
    this.setState({displayButton: false})
  }

  render(){
    return (
      <View style={styles.container}>

        {!this.state.loading && <View style={styles.header}>
          <Text style={styles.headerText}>Cloudy</Text>
        </View>}

        <View style={styles.imageField}>
          {this.state.firstState && <ChooseState text={this.setToLoadingText} continue={this.continue}/>}
          {!this.state.loading && !this.state.firstState && <DisplayImage toggle={this.toggleButton}/>}
          {this.state.loading && this.state.loadingText && <LoadingAnimation reset={this.resetState} delay={this.state.delay}/>}
          {this.state.loading && !this.state.loadingText && <LoadingAnimation2 reset={this.resetState} delay={this.state.delay}/>}

        </View>

        {this.state.displayButton && <ExportButton export={this.startLoading}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D253A'
  },
  header:{
    backgroundColor: '#2B8AD8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    height: 70,
  },
  headerText:{
    color: 'white',
    fontSize: 20,
    padding: 26,
  },
  imageField:{
    flex: 1,
  }
});
