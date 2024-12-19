import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { useRouter } from 'expo-router';

import stylesMain from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');
const clicable = true

export default function goToAll(){
    const router = useRouter();

    async function handlePress (){
        router.push("/splashScreen")
        console.log("Voltando pra Splashscreen")
    }
    async function handleVoltar(){
        router.push("/")
        console.log("Voltando para Index")
    }
    return(
        <SafeAreaView style={stylesMain.basicContainer}>      
            <View style={styles.topSection}>
                <Text style={stylesMain.mainTitle}>goToAll</Text>
                <Text style={stylesMain.mainTitle}>Vá para qualquer tela do App</Text>
            </View>
            <View style={styles.middleSection}>

            <Link href="/inputName" style={stylesMain.mainButton}>
                <Text style={stylesMain.mainButtonText}>inputName</Text>
            </Link>
            <Link href="/preferencias" style={stylesMain.mainButton}>
                <Text style={stylesMain.mainButtonText}>preferencias</Text>
            </Link>
            <Link href="/home" style={stylesMain.mainButton}>
                <Text style={stylesMain.mainButtonText}>home</Text>
            </Link>
            <Link href="/scanner" style={stylesMain.mainButton}>
                <Text style={stylesMain.mainButtonText}>scanner</Text>
            </Link>
            <Link href="/cadManual" style={stylesMain.mainButton}>
                <Text style={stylesMain.mainButtonText}>cadManual</Text>
            </Link>
            <Link href="/minhaDispensa" style={stylesMain.mainButton}>
                <Text style={stylesMain.mainButtonText}>minhaDispensa</Text>
            </Link>
            <Link href="/telaConfig" style={stylesMain.mainButton}>
                <Text style={stylesMain.mainButtonText}>telaConfig</Text>
            </Link>

              
            </View>   
            <View style={styles.bottomSection}>
                <TouchableOpacity  style={[
                    clicable ? stylesMain.mainButton : stylesMain.mainButtonDisabled,
                ]} onPress={handlePress}>
                    
                    <Text style={[
                    clicable ? stylesMain.mainButtonText : stylesMain.mainButtonTextDisabled,
                ]}>splashScreen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleVoltar}>
                    <Text style={stylesMain.mainButtonTextDisabled}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = {
    topSection: {
        height: height * 0.2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    middleSection: {
        height: height * 0.5,
        justifyContent: 'center',
        gap: 20,
    },
    bottomSection: {
        height: height * 0.2,
        justifyContent: 'flex-start',
        gap:20,
    },
};