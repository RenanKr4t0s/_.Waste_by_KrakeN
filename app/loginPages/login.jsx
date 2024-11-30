import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'

import stylesPattern from '../components/stylePatterns'
import stylesMain from '../components/styles';
import InputToLogin from '../components/inputToLogin';

export default function splashScreen() {
    const [number, setNumber] = React.useState('');

    function handleChange(text) {
        console.log(text); 
        setNumber(text);
    }

  return (
    <SafeAreaView style={stylesMain.basicContainer}>
        <Text style={stylesMain.mainTitle}>Bem-vindo de volta!</Text>
        <InputToLogin
            label="Teste de input" 
            onChangeText={handleChange}
            value={number}
            placeholder="Digite um número"
            keyboardType="numeric"
        />
        <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 300,
      padding: 135,
      backgroundColor: stylesPattern.clearColor,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    images:{
        width: 135,
        height: 30,
        resizeMode: 'contain',
    },
    developed:{ 
        color: stylesPattern.clearColor,
        fontSize: 20,
        marginBottom: 5,
    }
  });