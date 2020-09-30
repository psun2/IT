// yarn add prop-types
// npm install prop-types

// expo install expo-linear-gradient

// https://uigradients.com/#Aubergine // 그라데이션

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#373B44', '#4286f4'],
    title: 'Thunderstorm',
    subtitle: 'a thunderstorm, a thundershower',
  },
  Drizzle: {
    iconName: 'weather-partly-rainy',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: 'drizzle, sprinkle, light rain',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#00C6FB', '#005BEA'],
    title: 'Rain',
    subtitle: 'There will be rain in all parts today.',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7DE2FC', '#B9B6E5'],
    title: 'Snow',
    subtitle: 'Snowflakes come from sky.',
  },
  Atmosphere: {
    iconName: 'weather-partly-rainy',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Atmosphere',
    subtitle: 'the upper atmosphere',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#FF7300', '#FEF253'],
    title: 'Clear',
    subtitle: 'generally fair',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: 'Today it will be dull and overcast.',
  },
  Haze: {
    iconName: 'weather-fog',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Haze',
    subtitle: "Just don't go outside.",
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Mist',
    subtitle: 'a misty morning',
  },
  Dust: {
    iconName: 'weather-windy',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Dust',
    subtitle: 'There is a lot of dust today.',
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={
        weatherOptions[condition]
          ? weatherOptions[condition].gradient
          : ['#40E0D0', '#FF8C00', '#FF0080']
      }
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        {/* 날씨를 못 찾을 경우를 대비하여 apple 이라는 defalut 값을 넣어 줍니다 */}
        <MaterialCommunityIcons
          size={96}
          name={
            weatherOptions[condition]
              ? weatherOptions[condition].iconName
              : 'apple'
          }
          style={styles.icon}
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>
          {weatherOptions[condition]
            ? weatherOptions[condition].title
            : 'sorry'}
        </Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition]
            ? weatherOptions[condition].subtitle
            : "Can't find"}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  // oneOf() 함수는 배열형태로 넣어 그 모든 값들 중 하나 가 포함되는,
  // 즉 그 중에 하나를 받아서 type 체크를 합니다.
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  temp: {
    fontSize: 42,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 54,
    // fontWeight 는 String 입니다.
    fontWeight: '300',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
