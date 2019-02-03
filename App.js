/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform , StyleSheet , Text , View} from 'react-native';
import Home from './src/Pages/Home';



export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
      <Home/>
      {/* <App2/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
