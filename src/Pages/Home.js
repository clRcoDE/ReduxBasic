import React, { Component } from 'react';
import { View, Text , StyleSheet } from 'react-native';
import Buttons from '../Components/Buttons';

import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducer from '../Services/Counter/reducer'

const store = createStore(reducer);

export default class Home extends Component {

    

  render() {
    return (
      <Provider style={styles.provider} store={store}>
      <Buttons/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
    provider:{
        flex:1,
        backgroundColor:'red'
    }
});
