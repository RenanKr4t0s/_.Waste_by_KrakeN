import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import stylesPattern from './components/stylePatterns'
import { SafeAreaView } from 'react-native-safe-area-context'
const wasteLogo = require('../assets/Waste_Logo.png')

export default function splashScreen() {
  return (
    <SafeAreaView>
      <Text>splashScreen</Text>
      <Image source={wasteLogo}></Image>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})