// docs para trabalhar https://react-native-async-storage.github.io/async-storage/docs/usage/

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export default function useStorageFunctions() {
    const guardarObjeto = async (chave, objeto) => {
        try {
            const jsonObjeto = JSON.stringify(objeto);
            await AsyncStorage.setItem(chave, jsonObjeto);
        } catch (e) {
            Alert.alert(`objeto não pode ser cadastrado! ${e}`)
        }
    }
    const pegarObjeto = async (chave) => {
        try {
            const jsonObjeto = await AsyncStorage.getItem(chave);
            return jsonObjeto ? JSON.parse(jsonObjeto) : [{
                'id': 'tst',
                'name': 'Banana Exemplo',
                'quantity': 1,
                'created': '09-09-2023',
                'validTo': '09-09-2123',
            }]
        } catch (e) {
            Alert.alert(`Objeto ${objeto} não foi encontrado!`);
        }
    }

    async function storeData(property, value) {
        try {
            await AsyncStorage.setItem(property, value);
        } catch (e) {
            Alert.alert(`propriedade ${property} não pode ser cadastrada!`);
        }
    };
    async function getData(property) {
        try {
            const value = await AsyncStorage.getItem(property);
            if (value !== null) {
                return value
            } else {
                return ["nada cadastrado"]
            }
        } catch (e) {
            Alert.alert(`propriedade ${property} não pode ser lida!`)
        }
    };
    return { guardarObjeto, pegarObjeto, storeData, getData }
}