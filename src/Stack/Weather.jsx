import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const apiKeyWeather = process.env.REACT_APP_API_KEY_WEATHER;


const Weather = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather</Text>
    </View>
  )
}

export default Weather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
});
