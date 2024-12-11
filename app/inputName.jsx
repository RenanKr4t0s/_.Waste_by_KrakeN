import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useStorageFunctions } from './functions/storageFunctions';
import { useRouter } from 'expo-router';

import stylesMain from './components/styles';
import NameInput from './components/NameInput'


const inputName = () => {
    const {storeData} = useStorageFunctions();
    const router = useRouter();

    const [user, setUser] = React.useState({
        name:'',
        preferences:[]
    });

    function handleChange(field, content) {
        console.log(field+ " :" + content); 
        setUser((prevUser) => ({
            ...prevUser,
            [field]: content    
        }));
    }
    async function handlePress (){
        await storeData('name',user.name)
        router.push("/splashScreen")
        console.log("dados salvos")
        
    }
    return (
        <View>
            <NameInput
                placeholder="Qual é o seu nome?"
                onChangeText={(text)=>(handleChange('name',text))} 
            />
            {/* Criar um touchable que testa se o input não está vazio */}
            <TouchableOpacity style={stylesMain.mainButton} onPress={handlePress}>
                <Text style={stylesMain.mainButtonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default inputName