// Em requisitos : Tela de Recepção

import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useStorageFunctions } from './functions/storageFunctions';
import { useRouter } from 'expo-router';

import stylesMain from './styles/styles';
import NameInput from './components/NameInput'
import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');

const inputName = () => {
    const {storeData} = useStorageFunctions();
    const router = useRouter();

    const [clicable, setClicable]=React.useState(false)
    const [userName, setUserName] = React.useState('Usuário')
    // const [user, setUser] = React.useState({
    //     name:'Usuário',
    //     preferences:[]
    // });

    function handleChange(content) {
        console.log(content); 
        setUserName(content)
        // setUser((prevUser) => ({
        //     ...prevUser,
        //     [field]: content    
        // }));
        setClicable(true)
    }
    async function handlePress (){
        await storeData('name',userName)
        router.push("/preferencias")
        console.log("dados salvos")
        
    }
    return (
        <SafeAreaView style={stylesMain.basicContainer}>      
            <View style={styles.topSection}>
                <Text style={stylesMain.mainTitle}>Bem vindo ao !WASTE</Text>
                <Text style={stylesMain.mainTitle}>{userName}!</Text>
            </View>
    
            <View style={styles.middleSection}>
                <NameInput
                    placeholder="Digite seu nome"
                    onChangeText={handleChange} 
                />
            </View>   
            <View style={styles.bottomSection}>
                <TouchableOpacity  style={[
                    clicable ? stylesMain.mainButton : stylesMain.mainButtonDisabled,
                ]} onPress={handlePress} disabled={!clicable}>
                    
                    <Text style={[
                    clicable ? stylesMain.mainButtonText : stylesMain.mainButtonTextDisabled,
                ]}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={stylesMain.mainButtonTextDisabled}>Faço isso mais tarde!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}     
const styles = {
    topSection: {
        height: height * 0.2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    middleSection: {
        height: height * 0.4,
        justifyContent: 'center',
    },
    bottomSection: {
        height: height * 0.2,
        justifyContent: 'flex-start',
        gap:20,
    },
};

export default inputName