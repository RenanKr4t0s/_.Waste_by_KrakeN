import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context'

import stylesMain from '../components/styles';
import InputToLogin from '../components/inputToLogin';

export default function splashScreen() {
    const [user, setUser] = React.useState({
      email:'',
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
        <View>
          <InputToLogin
              label="Email" 
              onChangeText={(text)=> handleChange('email', text)}
              value={user.name}
              placeholder="nome@email.com"
              keyboardType="email-adress"
          />
          <InputToLogin
              label="Senha"
              hideable  = {true} 
              onChangeText={(text)=> handleChange('password', text)}
              value={user.password}
              placeholder="Digite sua senha"
              keyboardType="email-adress"
          />
          <Link href="/kraken" style={stylesMain.loginForgotButton}>Esqueceu a Senha?</Link>
        </View>
        <View style={stylesMain.loginButtonSection}>
        <TouchableOpacity style={stylesMain.loginEnterButton}>
          <Text style={stylesMain.loginEnterText}>Entrar</Text>
        </TouchableOpacity>
          <Text style={stylesMain.loginEnterText} >ou</Text>
          <View style={stylesMain.loginSetOfButtons} >
            <Button title="xXx" />
            <Button title="xXx" />
            <Button title="xXx" />  
          </View>
        </View>
        <StatusBar style="auto" />
    </SafeAreaView>
  )
}