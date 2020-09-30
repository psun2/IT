import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync('distanceInterval');
    console.log(location);
    // {coords: {…}, timestamp: 1601460853837}
    // coords:
    // accuracy: 1617
    // altitude: null
    // altitudeAccuracy: null
    // heading: null
    // latitude: 37.600774
    // longitude: 127.1375959
    // speed: null
    // __proto__: Object
    // timestamp: 1601460853837
    // __proto__: Object
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
