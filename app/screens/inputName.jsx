// Em requisitos : Tela de Recepção

import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useStorageFunctions } from '../functions/storageFunctions';
import { useRouter } from 'expo-router';

import stylesMain from '../styles/styles';
import NameInput from '../components/NameInput'

import SafeContainer from '../components/layoutScreen/SafeContainer';
import ArrowHeaderSection from '../components/layoutScreen/ArrowHeaderSection';
import BoddySection from '../components/layoutScreen/BoddySection';
import FooterSection from '../components/layoutScreen/FooterSection';

const { height } = Dimensions.get('window');

const inputName = () => {
    const { storeData } = useStorageFunctions();
    const router = useRouter();

    const [clicable, setClicable] = React.useState(false)
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
    async function handlePress() {
        await storeData('name', userName)
        router.push("/screens/preferencias")
        console.log("dados salvos")

    }
    return (
        <SafeContainer>
            <ArrowHeaderSection link="/"/>
            <BoddySection>
                <View style={stylesMain.titleContainer}>
                    <Text style={stylesMain.mainTitle}>Bem vindo ao !WASTE</Text>
                    <Text style={stylesMain.mainTitle}>{userName}!</Text>
                </View>
                <View style={stylesMain.inputGroup}>
                    <NameInput
                        placeholder="Digite seu nome"
                        onChangeText={handleChange}
                    />
                </View>
            </BoddySection>
            <FooterSection>
                <TouchableOpacity style={[
                    clicable ? stylesMain.mainButton : stylesMain.mainButtonDisabled,
                ]} onPress={handlePress} disabled={!clicable}>

                    <Text style={[
                        clicable ? stylesMain.mainButtonText : stylesMain.mainButtonTextDisabled,
                    ]}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={stylesMain.mainButtonTextDisabled}>Faço isso mais tarde!</Text>
                </TouchableOpacity>
            </FooterSection>

        </SafeContainer>
    );
}

export default inputName