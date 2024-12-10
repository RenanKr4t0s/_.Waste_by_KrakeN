import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';

import { useStorageFunctions } from '../storageFunc/storageFunctions';
import stylesMain from '../components/styles';
import { useState } from 'react';

const {getData} = useStorageFunctions();

export default function DataTest() {
    const [dataTested, setDataTested] = useState("")
    async function handlePress(){
        await setDataTested(getData("email"))
    }

  return (
    <View style={stylesMain.basicContainer}>
      <Text style={stylesMain.mainTitle}>Kraken está rodando!</Text>
      <Button onPress={handlePress} title='Pegar dados' />
      <Text style={stylesMain.mainTitle}>O email é: {dataTested}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
