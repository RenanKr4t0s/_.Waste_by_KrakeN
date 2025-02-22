import React from 'react';
import { useRouter } from 'expo-router';
import purpleGrayBall from "../../../assets/PurpleGrayBall.png";
import arrowBack from "../../../assets/ArrowBack.png";
import {
    View,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function HeaderSection({ link, invert = false }) {
    const router = useRouter();

    return (
        <View style={styles.header}>
            {/* Botão de voltar com a seta */}
            <TouchableOpacity
                onPress={() => router.push(link)}
                style={styles.backButton}
            >
                <Image source={arrowBack} style={styles.backImage} />
            </TouchableOpacity>

            {/* Imagem centralizada com espelhamento opcional */}
            <Image 
                source={purpleGrayBall} 
                style={[
                    styles.centerImage, 
                    invert && { transform: [{ rotate: '180deg' }] }
                ]} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: height * 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        position: 'relative'
    },
    backButton: {
        position: 'absolute',
        left: 10, 
        padding: 10
    },
    backImage: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    centerImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }
});
