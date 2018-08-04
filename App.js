/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FetchLocation from './components/FetchLocation';
import UsersMaps from './components/UsersMaps';

export default class App extends Component{

  state = {
    userLocation: null
  }

  userLocation = () =>{
    console.log("PRESSED BUTTON");
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421,
        }
      })
      console.log(position);
    }, err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <UsersMaps userLocation={this.state.userLocation}/>
        <FetchLocation onGetLocation={this.userLocation}/>
      </View>
    );
  }
}

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
