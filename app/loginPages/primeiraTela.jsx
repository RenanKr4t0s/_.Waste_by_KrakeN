import React from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import { Link } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'

import stylesMain from '../components/styles';

export default function splashScreen() {

  return (
    <SafeAreaView style={stylesMain.basicContainer}>
        <Image style={stylesMain.mainImage} source={require('../components/mockups/BenJhonson.jpg')} />
        <View style={stylesMain.mainButtonContainer}>
          <Text style={stylesMain.mainTitle}>Bem-vindo ao !Waste</Text>
          <Text style={stylesMain.mainSubtitle}>Bem-vindo ao !Waste</Text>
        </View>
          <View style={stylesMain.mainButtonContainer}>
            <Link href="/loginPages/dataTest" style={stylesMain.mainButtonClear}>
              <Text style={stylesMain.mainButtonTextClear}>Entrar</Text>
              </Link>
            <Link href="/loginPages/login" style={stylesMain.mainButton}>
              <Text style={stylesMain.mainButtonText}>Cadastrar</Text>
            </Link>
          </View>
          <StatusBar style="auto" />
    </SafeAreaView>
  )
}