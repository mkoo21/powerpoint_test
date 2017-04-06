/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RNFS from 'react-native-fs';

var powerpoint_test = React.createClass({
  getInitialState(){
    return{
      downloadComplete: false
    }
  },
  componentDidMount(){
    var options = {
      fromUrl: "https://sctcc.ims.mnscu.edu/shared/CheckYourComputer/SamplePPTX.pptx",
      toFile: RNFS.DocumentDirectoryPath + "/samplePPTX.pptx"
    }
    RNFS.downloadFile(options).promise.then(res => {
      this.setState({downloadComplete: true});
      console.log("Sample powerpoint file successfully downloaded to " + options.toFile);
    }).catch(err => {
      console.log("Error downloading file: ", err);
    });
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

module.exports = powerpoint_test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('powerpoint_test', () => powerpoint_test);
