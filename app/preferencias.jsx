import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useStorageFunctions } from './functions/storageFunctions';
import { useRouter } from 'expo-router';

import stylesMain from './components/styles';
import NameInput from './components/NameInput'

const { height } = Dimensions.get('window');
const preferencias = () => {
    const {storeData} = useStorageFunctions();
    const router = useRouter();

    const [clicable, setClicable]=React.useState(false)
    const [user, setUser] = React.useState({
        name:'Usuário',
        preferences:[]
    });

    function handleChange(field, content) {
        console.log(field+ " :" + content); 
        setUser((prevUser) => ({
            ...prevUser,
            [field]: content    
        }));
        setClicable(true)
    }
    async function handlePress (){
        await storeData('name',user.name)
        router.push("/splashScreen")
        console.log("dados salvos")
        
    }
    return (
        <View style={stylesMain.basicContainer}>      
            <View style={styles.topSection}>
                <Text style={stylesMain.mainTitle}>Selecione o tipo de receita</Text>
                <Text style={stylesMain.mainTitle}>que gostaria de cozinhar</Text>
            </View>
            <View style={styles.middleSection}>

              {/* Colocar os botões aqui */}

              
            </View>   
            <View style={styles.bottomSection}>
                <TouchableOpacity  style={[
                    clicable ? stylesMain.mainButton : stylesMain.mainButtonDisabled,
                ]} onPress={handlePress} disabled={!clicable}>
                    
                    <Text style={[
                    clicable ? stylesMain.mainButtonText : stylesMain.mainButtonTextDisabled,
                ]}>Concluir</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={stylesMain.mainButtonTextDisabled}>Faço isso mais tarde!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}     
const styles = {
    container: {
    
        backgroundColor: '#f5f5f5',
    },
    topSection: {
        height: height * 0.2,
        backgroundColor: '#ffcccb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleSection: {
        height: height * 0.4,
        backgroundColor: '#add8e6',
        justifyContent: 'flex-start',
    },
    bottomSection: {
        height: height * 0.2,
        backgroundColor: '#90ee90',
        justifyContent: 'center',
        alignItems: 'center',
        gap:20,
    },
};





export default preferencias