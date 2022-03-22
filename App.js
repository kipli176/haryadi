import React, { useState} from 'react'
import { StyleSheet, Text, View, Dimensions, Animated, Button } from 'react-native'

const App = () => {
  const fadeAnimation = new Animated.Value(0)
  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  setTimeout(() => {
    fadeIn();
  }, 3000);


  return (
    <View style = {styles.container} >
      <Animated.View style={[ styles.fadingContainer, { opacity: fadeAnimation }, ]} >
        <Text style = {styles.title} >Hello World!</Text>
      </Animated.View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: Dimensions.get('window').width / 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})