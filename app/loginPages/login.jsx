import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'

import stylesPattern from '../components/stylePatterns'
import stylesMain from '../components/styles';
import InputToLogin from '../components/inputToLogin';

export default function splashScreen() {
    const [user, setUser] = React.useState({
      name:'',
      password:''
    });

    function handleChange(field, content) {
        console.log(field+ " :" + content); 
        setUser((prevUser) => ({
          ...prevUser,  // Mantém o restante das propriedades do objeto
          [field]: content    // Atualiza apenas o campo 'name'
        }));
    }

  return (
    <SafeAreaView style={stylesMain.basicContainer}>
        <Text style={stylesMain.mainTitle}>Bem-vindo de volta!</Text>
        <InputToLogin
            label="Nome de usuário" 
            onChangeText={(text)=> handleChange('name', text)}
            value={user.name}
            placeholder="Digite seu nome"
            keyboardType="email-adress"
        />
        <InputToLogin
            label="Senha" 
            onChangeText={(text)=> handleChange('password', text)}
            value={user.password}
            placeholder="Digite sua senha"
            keyboardType="email-adress"
            secureTextEntry={true}
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