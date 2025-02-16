import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name='index' />
      <Stack.Screen name='splashScreen' />
    </Stack>
  )
}

export default RootLayout