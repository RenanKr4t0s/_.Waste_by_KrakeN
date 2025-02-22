// Em requisitos (não consta) : Tela de Preferências
// Botão funcionando visualmente sem salvar dados

import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import stylesMain from '../styles/styles';
import useStorageFunctions from '../functions/storageFunctions';
import PreferenciasButton from '../components/PreferenciasButton';

import SafeContainer from '../components/layoutScreen/SafeContainer';
import ArrowHeaderSection from '../components/layoutScreen/ArrowHeaderSection';
import BoddySection from '../components/layoutScreen/BoddySection';
import FooterSection from '../components/layoutScreen/FooterSection';

const { height } = Dimensions.get('window');
// const { width } = Dimensions.get()
const categorias = ['Aves', 'Peixes e frutos do mar', 'Sopas', 'Saladas', 'Bolos e tortas', 'Massas', 'Lanches', 'Saudável', 'Carnes', 'Doces e sobremesas'];

export default function preferencias() {
    const { storeData } = useStorageFunctions();
    const router = useRouter();
    const [clicable, setClicable] = React.useState(false)

    async function handlePressTest(e){
        if(e === "Concluir"){
            await router.push("/screens/home")
        } else {
            await router.push("/screens/inputName")
        }
    }

    return (
        <SafeContainer>
            <ArrowHeaderSection link="/inputName" invert={true} />
            <BoddySection>
                <Text style={stylesMain.mainTitle}>Selecione o tipo de receita</Text>
                <Text style={stylesMain.mainTitle}>que gostaria de cozinhar</Text>
            </BoddySection>

            <View style={styles.middleSection}>
                {categorias.map((e) => {
                    return (
                        <PreferenciasButton key={e} onPress={() => { setClicable(true) }}>
                            {e}
                        </PreferenciasButton>
                    )
                })}
            </View>

            <View style={styles.bottomSection}>
                <TouchableOpacity style={[
                    clicable ? stylesMain.mainButton : stylesMain.mainButtonDisabled,
                ]} onPress={()=>handlePressTest("Concluir")} disabled={!clicable}>

                    <Text style={[
                        clicable ? stylesMain.mainButtonText : stylesMain.mainButtonTextDisabled,
                    ]}>Concluir</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handlePressTest("Depois")}>
                    <Text style={stylesMain.mainButtonTextDisabled}>Faço isso mais tarde!</Text>
                </TouchableOpacity>
            </View>
        </SafeContainer>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
    },
    bottomSection: {
        height: height * 0.2,
        justifyContent: 'flex-start',
        gap: 20,
    },
};





