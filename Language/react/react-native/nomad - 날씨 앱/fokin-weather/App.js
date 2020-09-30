// https://docs.expo.io/versions/v39.0.0/sdk/location/
// expo install expo-location
// yarn add axios
// npm install axios

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    // yarn add axios
    // npm install axios
    const API_KEY = 'bbc6229f5e4d98c82e1e4918cfa841a3';
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    console.log(url);

    const {
      data: {
        main: { temp },
        weather: [main],
      },
    } = await axios.get(url);
    // console.log(data);
    this.setState({
      isLoading: false,
      temp: temp,
      condition: main.main,
    });
    console.log(this.state.condition);
  };

  getLocation = async () => {
    // 위치를 얻는 작업중
    // https://docs.expo.io/versions/v39.0.0/sdk/location/
    // expo install expo-location

    try {
      const response = await Location.requestPermissionsAsync();
      console.log(response);

      const location = await Location.getCurrentPositionAsync();
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

      const {
        coords: { latitude, longitude },
      } = location;
      // console.log(coords);
      console.log(latitude, longitude);

      // Send to API and get Weather
      // this.setState({ isLoading: false }); // 잘 작동 합니다...
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", 'So sad');
      console.error(error);
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
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
