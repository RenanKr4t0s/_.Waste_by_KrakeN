import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

import stylesMain from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');
const clicable = true

export default function cadManual(){
    const router = useRouter();

    async function handlePress (){
        router.push("/screens/splashScreen")
        console.log("Voltando pra Splashscreen")
    }
    return(
        <SafeAreaView style={stylesMain.basicContainer}>      
            <View style={styles.topSection}>
                <Text style={stylesMain.mainTitle}>Sou uma tela de cadManual</Text>
                <Text style={stylesMain.mainTitle}>aqui criaremos a tela inteira</Text>
            </View>
            <View style={styles.middleSection}>

              {/* Colocar os botões aqui */}

              
            </View>   
            <View style={styles.bottomSection}>
                <TouchableOpacity  style={[
                    clicable ? stylesMain.mainButton : stylesMain.mainButtonDisabled,
                ]} onPress={handlePress}>
                    
                    <Text style={[
                    clicable ? stylesMain.mainButtonText : stylesMain.mainButtonTextDisabled,
                ]}>Um botão</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={stylesMain.mainButtonTextDisabled}>Um botão diferente</Text>
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
        height: height * 0.4,
        justifyContent: 'center',
    },
    bottomSection: {
        height: height * 0.2,
        justifyContent: 'flex-start',
        gap:20,
    },
};