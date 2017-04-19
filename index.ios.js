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

export default class HelloWorld extends Component {
  render() {
    console.log('Debuging from React Native');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          My First React Native Project
        </Text>
        <Text style={styles.instructions}>
          Hello World
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C1F1EB',
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'Cochin',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontFamily: 'Cochin',
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
