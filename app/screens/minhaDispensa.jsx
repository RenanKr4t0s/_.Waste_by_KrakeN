import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

import BasketControls from '../components/basketControls';
import BasketProvider from '../contexts/BasketContext';

import stylesMain from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');
const clicable = true

export default function minhaDispensa() {
    const router = useRouter();

    async function handlePress() {
        router.push("/screens/splashScreen")
        console.log("Voltando pra Splashscreen")
    }
    return (
        <SafeAreaView style={stylesMain.basicContainer}>
            <View style={styles.topSection}>
                <Text style={stylesMain.mainTitle}>Sou uma tela de minhaDispensa</Text>
            </View>
            <View style={styles.middleSection}>
                <BasketProvider>
                    <BasketControls />
                </BasketProvider>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={[
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
        gap: 20,
    },
};