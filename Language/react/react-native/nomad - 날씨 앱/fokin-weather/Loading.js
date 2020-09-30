import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      {/* 
      앱 시작히 상태바의 글씨가 흰색이여서 안보임을 해소하고자
      잠시나마 검은색으로 보이게 하기
      */}
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting the fucking weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#FDF6AA',
  },
  text: {
    color: '#2f2f2f',
    fontSize: 20,
  },
});
