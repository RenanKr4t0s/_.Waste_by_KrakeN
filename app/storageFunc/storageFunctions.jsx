// docs para trabalhar https://react-native-async-storage.github.io/async-storage/docs/usage/

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export function useStorageFunctions(){
    async function storeData(property, value){
        try {
          await AsyncStorage.setItem(property, value);
        } catch (e) {
          Alert.alert(`propriedade ${property} não pode ser cadastrada!`)
        }
    };
    async function getData(property){
        try {
            const value = await AsyncStorage.getItem(property);
            if (value !== null) {
                return value
            }else{
                return "nada cadastrado"
            }
        } catch (e) {
            Alert.alert(`propriedade ${property} não pode ser lida!`)
        }
    };
    return {storeData, getData}
}